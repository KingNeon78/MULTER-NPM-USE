const router = require("express").Router();
const {userRegistration} = require('../controller/UserControler');
router.post("/register",userRegistration);

module.exports = router;