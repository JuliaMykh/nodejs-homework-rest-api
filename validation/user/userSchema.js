const Joi = require('joi');

const joiUserSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().required(),
    subscription: Joi.string().valid("starter", "pro", "business"),
    token: Joi.string(),
});

module.exports = {
    joiUserSchema,
    
};