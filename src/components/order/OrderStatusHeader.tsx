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
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <p className="text-lg md:text-xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-300">
          Order Status: {getOrderStatusInfo().label}
        </p>
        <p className="text-lg md:text-xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-300">
          Expected by: {getExpectedDelivery()}
        </p>
      </div>
      <div className="mt-3">
        <Progress
          className="animate-pulse h-3 md:h-4 bg-neutral-200 dark:bg-neutral-500"
          value={getOrderStatusInfo().progressValue}
        />
      </div>
    </>
  );
};

export default OrderStatusHeader;
