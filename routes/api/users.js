const express = require('express');

const router = express.Router();

const getCurrent = require('../../controllers/users/getCurrent');
const auth = require('../../middlewares/auth');

router.get("/current", auth, getCurrent );


module.exports = router;