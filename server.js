const path = require('path');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const dbHost = process.env.DB_HOST || 'localhost';
const dbName = process.env.DB_NAME || 'workout';
const dbUser = process.env.DB_USER || ''; // alex
const dbPass = process.env.DB_PASS || ''; // alex1234
const jointUserPass = !dbUser && !dbPass ? '' : `${dbUser}:${dbPass}@`;

// Connect to NongoDB
mongoose.connect(`mongodb://${jointUserPass}${dbHost}/${dbName}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

// Setup express app
const app = express();
const PORT = process.env.PORT || 3001;

// Setup request data parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Set static content to the public foler
app.use(express.static(path.join(__dirname, 'public')));


// Setup routing middleware
app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
