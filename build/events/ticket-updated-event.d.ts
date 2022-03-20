import { Subject } from "./subjects";
export interface TicketUpdatesEvent {
    subject: Subject.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
    };
}
