const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
require('./db');

// Middleware
app.use(express.json());

// Routes
const sampleRoutes = require('./routes/sampleRoutes');
app.use('/api/sample', sampleRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

