"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor(client) {
        this.client = client;
    }
    publishData() {
        this.client.publish(this.subject, this.toString());
    }
    toString() {
        return JSON.stringify(this.data);
    }
}
exports.Publisher = Publisher;
