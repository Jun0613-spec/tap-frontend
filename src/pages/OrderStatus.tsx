import { Link } from "react-router-dom";

import { useGetOrder } from "@/api/order";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import OrderStatusHeader from "@/components/order/OrderStatusHeader";
import OrderStatusDetail from "@/components/order/OrderStatusDetail";
import Spinner from "@/components/Spinner";

const OrderStatus = () => {
  const { orders, isLoading } = useGetOrder();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-3xl font-semibold mb-4 text-center">No Orders Yet</p>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 ">
          Ready to order? Tap to your door
        </p>
        <Link
          to="/"
          className="text-neutral-500 dark:text-neutral-400 underline hover:opacity-60"
        >
          Go Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
      {orders.map((order) => (
        <div className="space-y-10 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                alt="restaurant-image"
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatus;
