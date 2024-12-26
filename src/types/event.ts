import { EventOrganizier } from "./event_organizier";

export enum EventStatus{
  Pending = "pending",
  OpenReg = "open_registration",
  CloseReg = "close_registration",
  Done = "done",
  Postpone = "event_postpone",
  Cancel = "event_cancel"
}

export type EventProps = {
  eventId: string;
  orgId: string;
  name: string;
  description: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  ticketPrice: number | string;
  ticketAmount: number;
  ticketRegOpen: string;
  ticketRegClose: string;
  status: EventStatus;

  organizier: Partial<EventOrganizier>;
}