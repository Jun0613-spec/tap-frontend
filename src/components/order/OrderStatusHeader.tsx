import { Order } from "@/types";

import { ORDER_STATUS } from "@/config/order-status";

import { Progress } from "../ui/progress";

interface Props {
  order: Order;
}

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <div className="text-xl md:text-3xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between text-neutral-800 dark:text-neutral-300">
        <p> Order Status: {getOrderStatusInfo().label}</p>
        <p> Expected by: {getExpectedDelivery()}</p>
      </div>
      <Progress
        className="animate-pulse bg-green-300 dark:bg-green-800"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
