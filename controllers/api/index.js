const router = require('express').Router();

const messageRoutes = require('./message-routes.js');

router.use('/messages', messageRoutes);

module.exports = router;