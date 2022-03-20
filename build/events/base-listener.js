"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
class Listener {
    constructor(client) {
        this.ackWaitTime = 5 * 1000;
        this.client = client;
    }
    subscriptionOptions() {
        return this.client
            .subscriptionOptions()
            .setManualAckMode(true)
            .setAckWait(this.ackWaitTime)
            .setDeliverAllAvailable()
            .setDurableName(this.queueGroupName);
    }
    listen() {
        const sub = this.client
            .subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        sub.on("message", (msg) => {
            console.log(`Message is received: ${this.subject} / ${this.queueGroupName}`);
            const parsedData = this.parseMessage(msg);
            this.onMessage(parsedData, msg);
        });
    }
    parseMessage(msg) {
        try {
            const data = msg.getData();
            //console.log(data);
            return typeof data === "string" ? JSON.parse(data) : JSON.parse(data.toString());
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.Listener = Listener;
