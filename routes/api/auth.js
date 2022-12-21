const express = require('express')

const { auth: ctrl } = require("../../controllers");
const { validation } = require('../../validation/contacts');
const { authSchema } = require('../../validation/auth/authShema');
const { auth } = require('../../middlewares');

const router = express.Router()

router.post("/register", validation(authSchema), ctrl.register);

router.post("/login", validation(authSchema), ctrl.login);

router.get("/logout", auth, ctrl.logout);

module.exports = router;