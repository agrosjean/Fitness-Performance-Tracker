const path = require('path')
const router = require('express').Router();

// [GET] /exercise
router.get('/exercise', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get('/stats', async (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;