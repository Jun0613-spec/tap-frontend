import { Trash2 } from "lucide-react";

import { CartItem, Restaurant } from "@/types";

import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface Props {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
}

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between gap-4">
          <p>Your Order</p>
          <span>£{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <div>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </div>
            <div className="flex items-center gap-1">
              <Trash2
                className="cursor-pointer text-red-500 hover:text-red-600 dark:text-red-700 dark:hover:text-red-800"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              £{((item.price * item.quantity) / 100).toFixed(2)}
            </div>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>£{(restaurant.deliveryPrice / 100).toFixed(2)}</p>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
