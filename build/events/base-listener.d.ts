import { Stan, Message, SubscriptionOptions } from "node-nats-streaming";
import { Subject } from "./subjects";
interface Event {
    subject: Subject;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T["subject"];
    abstract queueGroupName: string;
    abstract onMessage: (data: T["data"], msg: Message) => void;
    protected ackWaitTime: number;
    private client;
    constructor(client: Stan);
    subscriptionOptions(): SubscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
export {};
