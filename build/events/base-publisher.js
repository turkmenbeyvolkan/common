"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
class Publisher {
    constructor(client) {
        this.client = client;
    }
    publishData() {
        new Promise((resolve, reject) => {
            try {
                console.log();
                this.client.publish(this.subject, this.toString());
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    toString() {
        return JSON.stringify(this.data);
    }
}
exports.Publisher = Publisher;
