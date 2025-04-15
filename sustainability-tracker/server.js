const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user');
const actionRoutes = require('./routes/action');

const app = express();
app.use(cors());
app.use(express.urlencoded())
app.use(express.json());
// Use action routes
app.use('/api/actions', actionRoutes);

// Use user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Hello World")
})

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));