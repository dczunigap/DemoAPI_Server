var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/listModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/demoapi', { useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});*/

var routes = require('./api/routes/listRoute'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started.... on: ' + port);
