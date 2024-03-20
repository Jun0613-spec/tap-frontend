import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

import { CheckoutSessionRequest, Order } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetOrder = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getOrderRequest = async (): Promise<Order[]> => {
    try {
      const accessToken = await getAccessTokenSilently();

      const response = await axios.get(`${API_BASE_URL}/api/order`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error("Failed to get order");
    }
  };

  const { data: orders, isLoading } = useQuery("fetchOrder", getOrderRequest, {
    refetchInterval: 5000,
  });

  return { orders, isLoading };
};

export const useCreateCheckoutSession = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createCheckoutSessionRequest = async (
    checkoutSessionRequest: CheckoutSessionRequest
  ) => {
    try {
      const accessToken = await getAccessTokenSilently();

      const response = await axios.post(
        `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
        checkoutSessionRequest,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error("Unable to create checkout session");
    }
  };

  const {
    mutateAsync: createCheckoutSession,
    isLoading,
    error,
    reset,
  } = useMutation(createCheckoutSessionRequest);

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return {
    createCheckoutSession,
    isLoading,
  };
};
