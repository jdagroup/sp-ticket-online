import { EventProps } from "../types/event";
import eventsData from "../data/event";

export const getEvents = (): EventProps[] => {
  return eventsData;
}

export const getEventById = (id: string): EventProps | undefined => {
  return eventsData.find((item: EventProps) => item.eventId === id);
}