export enum OrderStatus{
  Pending = "pending",
  Paid = "paid",
  Expire = "expire",
  Cancel = "cancel"
};

export type OrderProps = {
  OrderId: string;
  EventId: string;
  UserId: string;
  Quantity: number;
  TicketPrice: number;
  TotalPrice: number;
  Status: OrderStatus;
};