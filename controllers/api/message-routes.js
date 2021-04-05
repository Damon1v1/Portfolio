const router = require('express').Router();
const Message = require('../../models/Message');

router.post('/', async (req, res) => {
    try {
        const newMessage = await Message.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;