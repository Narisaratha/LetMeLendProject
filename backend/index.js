let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db')

    // Express Route
    const userRoute = require('../backend/routes/user.route');
    

    // Connecting mongodb Database
    mongoose.Promise = global.Promise;
    mongoose.connect(dbConfig.db, {
        useNewUrlParser: true
    }).then(() => {
        console.log('Database successfully connected');
    },
        error => {
            console.log('Could not connect to database : ' + error)
        }
    )

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(cors());
    app.use('/user', userRoute);

    
   

    // Port
    const port = process.env.PORT || 4000;
    const server = app.listen(port, () => {
        console.log('Connected to port ' + port)
    })

    // 404 Error
    app.use((req, res, next) => {
        next(createError(404))
    })

    //Error handler
    app.use(function(err, req, res, next) {
        console.error(err.message);
        if (!err.statusCode) err.statusCode = 500;
        res.stat(err.statusCode).send(err.message);
    })