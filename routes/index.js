const router = require('express').Router();

const workoutRoutes = require('./workout');
const exerciseRoutes = require('./exercise');

router.use('/api/workouts', workoutRoutes);
router.use('/', exerciseRoutes);

module.exports = router;
