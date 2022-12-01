const express = require('express')

const router = express.Router()

const { contacts: ctrl } = require("../../controllers");


router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', ctrl.add);

router.delete('/:contactId', ctrl.deleteContact);

router.put('/:contactId', ctrl.updateContact);

module.exports = router;
