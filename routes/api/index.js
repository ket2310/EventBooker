const router = require('express').Router();
const user = require('./user');
const events = require('./events');


router.use('/user', user);
router.use('/events', events);


module.exports = router;
