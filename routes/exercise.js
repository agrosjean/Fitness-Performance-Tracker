const path = require('path')
const router = require('express').Router();

// [GET] /exercise
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;