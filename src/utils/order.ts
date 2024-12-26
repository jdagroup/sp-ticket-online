import { OrderProps } from "../types/order";
import ordersData from "../data/order";

export const getOrders = (): OrderProps[] => {
  return ordersData;
}

export const getOrderById = (id: string): OrderProps | undefined => {
  return ordersData.find((item: OrderProps) => item.orderId === id);
}