const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('connexion db ok')
    })
    .catch((err) => {
        console.log({err})
    })