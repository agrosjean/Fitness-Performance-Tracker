const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: { type: String },
            name: String,
            duration: Number,
            weight: Number,
            reps: { type: Number, default: null },
            sets: { type: Number, default: null },
        }
    ]
});
const Workout = mongoose.model('Workout', workoutSchema);

module.exports = { Workout };