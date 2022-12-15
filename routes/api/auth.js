const express = require('express')

const { auth: ctrl } = require("../../controllers");
const { validation } = require('../../validation/contacts');
const { joiUserSchema } = require('../../validation/user')

const router = express.Router()

router.post("/register", validation(joiUserSchema), ctrl.register);

router.post("/login", validation(joiUserSchema), ctrl.login);

module.exports = router;