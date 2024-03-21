import { Order } from "@/types";

import { Separator } from "../ui/separator";

interface Props {
  order: Order;
}

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <p>Delivering to:</p>
        <p>{order.deliveryDetails.name}</p>
        <p>
          {order.deliveryDetails.addressLine}, {order.deliveryDetails.city},{" "}
          {order.deliveryDetails.postcode}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">Your Order</p>
        <ul>
          {order.cartItems.map((item, index) => (
            <li key={index}>
              <span>
                {item.name} x {item.quantity}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col">
        <p className="font-bold">Total</p>
        <p className="text-xl font-bold">
          £{(order.totalAmount / 100).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
