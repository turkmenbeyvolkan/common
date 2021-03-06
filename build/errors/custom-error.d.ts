export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor();
    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
