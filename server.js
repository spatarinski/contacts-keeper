const express = require('express');

const connectDB = require('./config/db');

const app = express();

// Call Database
connectDB().catch(err => {
  console.error(err.message);
  process.exit(1);
});

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Wellcome to the ContactKeeper API' }));

// Define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
