// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://admin:admin@e-commerce.jieynev.mongodb.net/?retryWrites=true&w=majority&appName=minor-project'; // Your MongoDB URI


mongoose.connect(MONGODB_URI, { useNewUrlParser: true,    
  useUnifiedTopology: true, });
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from public directory

// Routes
app.use('/', employeeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
