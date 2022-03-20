import { Subject } from "./subjects";
import { Stan } from "node-nats-streaming";
interface Event {
    subject: Subject;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T["subject"];
    private client;
    abstract data: T["data"];
    constructor(client: Stan);
    publishData(): void;
    toString(): string;
}
export {};
