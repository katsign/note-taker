const express = require('express');

// Sets up Express
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Maps to routes
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// Listener
app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
  });