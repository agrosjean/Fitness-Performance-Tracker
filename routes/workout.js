const path = require('path')
const router = require('express').Router();
const db = require('../models');

// [GET] /api/workouts
router.get('/', async (req, res) => {
    const workouts = await db.Workout.find();
    res.json(workouts);
});

// [POST] /api/workouts
router.post('/', async (req, res) => {
    const workout = req.body;
    const createdObj = await db.Workout(workout).save();
    res.json(createdObj);
});

// [GET] /api/workouts/range
router.get('/range', async (req, res) => {
    res.status(500).send('');
});

// [PUT] /api/workouts/:id
router.put('/:id', async (req, res) => {
    const exercise = req.body;
    const workout = await db.Workout.findOne({ _id: req.params.id });

    if (!workout) {
        return res.status(404).send('Not found');
    }

    workout.exercises.push(exercise);
    const updatedObj = await workout.save();
    res.json(updatedObj);
});

module.exports = router;