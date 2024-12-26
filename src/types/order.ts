import { EventProps } from "./event";

export enum OrderStatus{
  Pending = "pending",
  Paid = "paid",
  Expire = "expire",
  Cancel = "cancel"
};

export type OrderProps = {
  orderId: string;
  eventId: string;
  userId: string;
  quantity: number;
  ticketPrice: number;
  totalPrice: number;
  status: OrderStatus;

  event: EventProps;
};