"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthourized = void 0;
const custom_error_1 = require("./custom-error");
class NotAuthourized extends custom_error_1.CustomError {
    constructor() {
        super();
        this.statusCode = 401;
        this.reason = "You are not authourized to enter";
        Object.setPrototypeOf(this, NotAuthourized.prototype);
    }
    serializeErrors() {
        return [{
                message: this.reason
            }];
    }
}
exports.NotAuthourized = NotAuthourized;
