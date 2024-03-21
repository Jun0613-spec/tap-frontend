import { OrderStatus } from "@/types";

interface OrderStatusInfo {
  label: string;
  value: OrderStatus;
  progressValue: number;
}

enum ProgressPercentage {
  Placed = 0,
  OrderReceived = 25,
  Preparing = 50,
  OutForDelivery = 75,
  Delivered = 100,
}

export const ORDER_STATUS: OrderStatusInfo[] = [
  {
    label: "Placed",
    value: "placed",
    progressValue: ProgressPercentage.Placed,
  },
  {
    label: "Order Received",
    value: "paid",
    progressValue: ProgressPercentage.OrderReceived,
  },
  {
    label: "Preparing",
    value: "preparing",
    progressValue: ProgressPercentage.Preparing,
  },
  {
    label: "Out for Delivery",
    value: "outForDelivery",
    progressValue: ProgressPercentage.OutForDelivery,
  },
  {
    label: "Delivered",
    value: "delivered",
    progressValue: ProgressPercentage.Delivered,
  },
];
