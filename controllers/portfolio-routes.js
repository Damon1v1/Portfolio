const router = require('express').Router();

router.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

module.exports = router;