const express = require('express')

const router = express.Router()

const { contacts: ctrl } = require("../../controllers");
const  auth  = require('../../middlewares/auth');
const { validation, joiSchema, favoriteJoiSchema } = require('../../validation/contacts');


router.get('/', auth, ctrl.getAll);

router.get('/:contactId', auth,  ctrl.getById);

router.post('/', auth, validation(joiSchema),  ctrl.add);

router.delete('/:contactId', ctrl.deleteContact);

router.put('/:contactId', validation(joiSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", validation(favoriteJoiSchema), ctrl.patchFavorite); 

module.exports = router;
