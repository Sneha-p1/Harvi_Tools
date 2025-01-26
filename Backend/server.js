
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const productRoutes = require('./Routes/product'); // Import routes
const adminRoutes = require("./Routes/admin");
const messageRoutes = require("./Routes/message");
const path = require('path');

const cors = require("cors"); // Import CORS

dotenv.config();

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB:', err);
});


const corsOptions = {
    origin: 'http://localhost:5173', // Allow only requests from this origin
};

// Use CORS middleware with specified options
app.use(cors(corsOptions));


// Use routes
app.use('/api/messages', messageRoutes);
app.use('/api/products', productRoutes);
app.use("/api", adminRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
