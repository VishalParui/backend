const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express()
dotenv.config()
app.use(express.json());
app.use(cors());


// Import routes
const authRoutes = require('./routes/auth');

// Route Middleware
app.use('/api/auth', authRoutes);


const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, );
        console.log('Connected to MongoDB');

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Could not connect to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

startServer();
