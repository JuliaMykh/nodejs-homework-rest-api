const express = require('express');

const router = express.Router();


const { users: ctrl } = require("../../controllers");
const { auth, upload } = require("../../middlewares");
const { joiEmailSchema } = require("../../validation/user");
const { validation } = require('../../validation/contacts');

router.get("/current", auth, ctrl.getCurrent);

router.patch("/avatar", auth, upload.single("avatar"), ctrl.updateAvatar);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/verify", validation(joiEmailSchema), ctrl.repeatVerifyEmail);


module.exports = router;

