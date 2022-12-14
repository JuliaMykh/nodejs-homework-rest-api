const express = require('express')

const router = express.Router()

const { auth: ctrl } = require("../../controllers");
const { validation } = require('../../validation/contacts');
const {joiUserSchema }= require('../../validation/user')

router.post("/register", validation(joiUserSchema), ctrl.register);

module.exports = router;