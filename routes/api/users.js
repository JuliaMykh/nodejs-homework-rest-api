const express = require('express');

const router = express.Router();


const {users: ctrl } = require("../../controllers")
const { auth, upload } = require("../../middlewares");

router.get("/current", auth, ctrl.getCurrent);

router.patch("/avatar", auth, upload.single("avatar"), ctrl.updateAvatar);


module.exports = router;

