"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandler = void 0;
const express_validator_1 = require("express-validator");
const validation_error_1 = require("../errors/validation-error");
const validationHandler = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new validation_error_1.RequestValidationError(errors.array());
    }
    next();
};
exports.validationHandler = validationHandler;
