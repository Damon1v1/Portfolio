const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const contactRoutes = require('./contact-routes.js');
const portfolioRoutes = require('./portfolio-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/contact', contactRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;