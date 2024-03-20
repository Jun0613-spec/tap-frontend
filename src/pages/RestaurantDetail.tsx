import { useParams } from "react-router-dom";
import { useState } from "react";

import { useGetRestaurant } from "@/api/restaurant";
import { useCreateCheckoutSession } from "@/api/order";

import MenuItemCard from "@/components/restaurant/MenuItemCard";
import RestaurantInfo from "@/components/restaurant/RestaurantInfo";
import Spinner from "@/components/Spinner";
import OrderSummary from "@/components/restaurant/OrderSummary";
import CheckoutButton from "@/components/restaurant/CheckoutButton";
import { UserFormData } from "@/components/forms/user-profile-form/UserProfileForm";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";

import { CartItem, MenuItem } from "@/types";

const RestaurantDetail = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);
  const { createCheckoutSession, isLoading: isCheckoutLoading } =
    useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: MenuItem) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === menuItem._id
      );

      let updatedCartItems;

      if (existingCartItem) {
        updatedCartItems = prevCartItems.map((cartItem) =>
          cartItem._id === menuItem._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCartItems = [
          ...prevCartItems,
          {
            _id: menuItem._id,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1,
          },
        ];
      }

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(updatedCartItems)
      );

      return updatedCartItems;
    });
  };

  const removeFromCart = (cartItem: CartItem) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item._id === cartItem._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const filteredCartItems = updatedCartItems.filter(
        (item) => item.quantity > 0
      );

      if (cartItem.quantity === 1) {
        // Remove the item from the cart
        return filteredCartItems.filter((item) => item._id !== cartItem._id);
      }

      sessionStorage.setItem(
        `cartItems-${restaurantId}`,
        JSON.stringify(filteredCartItems)
      );

      return filteredCartItems;
    });
  };

  const onCheckout = async (userFormData: UserFormData) => {
    if (!restaurant) return;

    const checkoutData = {
      cartItems: cartItems.map((cartItem) => ({
        menuItemId: cartItem._id,
        name: cartItem.name,
        quantity: cartItem.quantity.toString(),
      })),
      restaurantId: restaurant?._id,
      deliveryDetails: {
        name: userFormData.name,
        addressLine: userFormData.addressLine,
        postcode: userFormData.postcode,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string,
      },
    };

    const data = await createCheckoutSession(checkoutData);
    window.location.href = data.url;
  };

  if (isLoading || !restaurant) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 6}>
        <img
          src={restaurant.imageUrl}
          alt="restaurant-image"
          className="rounded-md object-cover w-full h-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />
          <p className="text-2xl font-bold tracking-tight">Menu</p>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItemCard
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>
        <div>
          <Card>
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
            <CardFooter>
              <CheckoutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
                isLoading={isCheckoutLoading}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
