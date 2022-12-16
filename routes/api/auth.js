const express = require('express')

const logout = require('../../controllers/auth/logout')
const { auth: ctrl } = require("../../controllers");
const { validation } = require('../../validation/contacts');
const { authSchema } = require('../../validation/auth/authShema');
const auth = require('../../middlewares/auth');

const router = express.Router()

router.post("/register", validation(authSchema), ctrl.register);

router.post("/login", validation(authSchema), ctrl.login);

router.get("/logout", auth, logout);

module.exports = router;