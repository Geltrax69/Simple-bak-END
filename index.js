const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product.route'); // add this line

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
  res.send('Working');
});

mongoose.connect('mongodb+srv://geltrax:geltrax@backenddb.rcjaxqv.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB')
 .then(() => {
    console.log('Connected!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
 .catch((err) => console.error(err)); // define the error in the catch block