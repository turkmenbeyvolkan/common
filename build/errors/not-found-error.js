"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const custom_error_1 = require("./custom-error");
class NotFoundError extends custom_error_1.CustomError {
    constructor() {
        super();
        this.statusCode = 503;
        this.reason = "Requested page not found";
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{
                message: this.reason
            }];
    }
}
exports.NotFoundError = NotFoundError;
