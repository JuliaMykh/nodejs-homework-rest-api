const Joi = require('joi');

const joiSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(7).required(),
    favorite: Joi.bool().required(),
});
    
const favoriteJoiSchema = Joi.object({
    favorite: Joi.bool().required(),
});

module.exports = {
    joiSchema,
    favoriteJoiSchema

}