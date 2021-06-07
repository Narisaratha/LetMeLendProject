let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();


    // User model
let userSchema = require('../models/User')

//Create User
router.route('/create-user').post((req, res, next) => {
    userSchema.create(req.body, (error, data) =>{
    if (error) {
        return next(error);
    }else {
        console.log(data);
        res.json(data);
    }
    })
})

//Read User
router.route('/').get((rea, res) => {
    userSchema.find((error, data) => {
        if(error) {
            return next(error);
        }else{
            res.json(data);
        }
    })
})

//Get single user
router.route('/edit-user/:studentid').get((req, res) => {
    userSchema.findById(req.params.studentid, (error, data) => {
        if(error) {
            return next(error);
        }else{
            res.json(data);
        }
    })
})

//Updata user
router.route('/update-user/:studentid').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.stusentid, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(error);
            console.log(error);
        }else{
            res.json(data);
            console.log("User updated success fully");
        }
    })
})

//Delete user
router.route('/delete-user/:studentid').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.studentid, (error,data) => {
        if(error) {
            return next(error);
        }else{
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;