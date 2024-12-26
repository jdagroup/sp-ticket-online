import { EventStatus } from "~/types/event";
import { OrderProps, OrderStatus } from "~/types/order";

const items: OrderProps[] = [
  {
    orderId: "order1",
    eventId: "event1",
    userId: "user1",
    quantity: 2,
    ticketPrice: 50,
    totalPrice: 100,
    status: OrderStatus.Pending,
    event: {
      eventId: "event1",
      orgId: "org1",
      name: "Music Concert",
      description: "A thrilling music concert featuring live bands.",
      location: "Stadium A",
      dateStart: "2024-05-01T19:00:00",
      dateEnd: "2024-05-01T22:00:00",
      ticketPrice: 50,
      ticketAmount: 500,
      ticketRegOpen: "2024-04-01T00:00:00",
      ticketRegClose: "2024-04-30T23:59:59",
      status: EventStatus.OpenReg,
      organizier: {
        name: "EventCo",
      }
    }
  },
  {
    orderId: "order2",
    eventId: "event2",
    userId: "user2",
    quantity: 1,
    ticketPrice: 30,
    totalPrice: 30,
    status: OrderStatus.Pending,
    event: {
      eventId: "event2",
      orgId: "org2",
      name: "Art Exhibition",
      description: "A beautiful exhibition of modern art.",
      location: "Gallery B",
      dateStart: "2024-06-15T10:00:00",
      dateEnd: "2024-06-15T18:00:00",
      ticketPrice: 30,
      ticketAmount: 200,
      ticketRegOpen: "2024-05-01T00:00:00",
      ticketRegClose: "2024-06-14T23:59:59",
      status: EventStatus.CloseReg,
      organizier: {
        name: "ArtWorld",
      }
    }
  },
  {
    orderId: "order3",
    eventId: "event1",
    userId: "user3",
    quantity: 3,
    ticketPrice: 50,
    totalPrice: 150,
    status: OrderStatus.Paid,
    event: {
      eventId: "event1",
      orgId: "org1",
      name: "Music Concert",
      description: "A thrilling music concert featuring live bands.",
      location: "Stadium A",
      dateStart: "2024-05-01T19:00:00",
      dateEnd: "2024-05-01T22:00:00",
      ticketPrice: 50,
      ticketAmount: 500,
      ticketRegOpen: "2024-04-01T00:00:00",
      ticketRegClose: "2024-04-30T23:59:59",
      status: EventStatus.Postpone,
      organizier: {
        name: "EventCo",
      }
    }
  }
];


export default items;