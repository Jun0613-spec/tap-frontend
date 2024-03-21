import { useEffect, useState } from "react";

import { Order, OrderStatus } from "@/types";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";

import { ORDER_STATUS } from "@/config/order-status";

import { useUpdateMyRestaurantOrder } from "@/api/my-restaurant";

interface Props {
  order: Order;
}

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <Card className="bg-neutral-100 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600">
      <CardHeader>
        <CardTitle className="flex flex-col md:flex-row justify-start mb-3 text-sm md:text-base gap-5">
          <p>
            Customer Name:{" "}
            <span className="font-normal">{order.deliveryDetails.name}</span>
          </p>
          <p>
            Delivery Address:{" "}
            <span className="font-normal">
              {order.deliveryDetails.addressLine}, {order.deliveryDetails.city},{" "}
              {order.deliveryDetails.postcode}
            </span>
          </p>
          <p>
            Time: <span className="font-normal">{getTime()}</span>
          </p>
          <p>
            Total Cost:{" "}
            <span className="font-normal">
              £{(order.totalAmount / 100).toFixed(2)}
            </span>
          </p>
        </CardTitle>
        <Separator className="bg-neutral-300  dark:bg-neutral-600" />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem, index) => (
            <div key={index} className="text-sm md:text-base">
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              <span>{cartItem.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map((status) => (
                <SelectItem value={status.value}>{status.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
