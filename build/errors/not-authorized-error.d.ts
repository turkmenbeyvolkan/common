import { CustomError } from "./custom-error";
export declare class NotAuthourized extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
