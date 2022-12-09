const Joi = require('joi');
const createError = require('http-errors');

const validation = (schema) => {
    return (req, res, next) => {
        
        if (Object.keys(req.body).length === 0) {
            throw createError(400, "Missing field");
        }

        const { error } = schema.validate(req.body);
        if (error) {
            error.status = 400;
            next(error);
        }
        next();
    };
};

module.exports = validation;