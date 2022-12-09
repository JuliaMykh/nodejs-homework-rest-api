
const validation = require('./contactsValidate');
const { joiSchema, favoriteJoiSchema } = require('./contactsSchema');

module.exports = {
    validation,
    joiSchema,
    favoriteJoiSchema
}