const express = require('express')

const { auth: ctrl } = require("../../controllers");
const { validation } = require('../../validation/contacts');
const { joiUserSchema } = require('../../validation/user');
const auth = require('../../middlewares/auth');

const router = express.Router()

router.post("/register", validation(joiUserSchema), ctrl.register);

router.post("/login", validation(joiUserSchema), ctrl.login);

router.get("/logout", auth, ctrl.logout);

module.exports = router;