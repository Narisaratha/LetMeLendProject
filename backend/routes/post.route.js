let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();


    // post model
let postSchema = require('../models/Post')

//Create post
router.route('/create-post').post((req, res, next) => {
    postSchema.create(req.body, (error, data) =>{
    if (error) {
        return next(error);
    }else {
        console.log(data);
        res.json(data);
    }
    })
})

//Read post
router.route('/').get((rea, res) => {
    postSchema.find((error, data) => {
        if(error) {
            return next(error);
        }else{
            res.json(data);
        }
    })
})

//Get single post
router.route('/edit-post/:studentid').get((req, res) => {
    postSchema.findById(req.params.studentid, (error, data) => {
        if(error) {
            return next(error);
        }else{
            res.json(data);
        }
    })
})

//Updata post
router.route('/update-post/:studentid').put((req, res, next) => {
    postSchema.findByIdAndUpdate(req.params.stusentid, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(error);
            console.log(error);
        }else{
            res.json(data);
            console.log("post updated success fully");
        }
    })
})

//Delete post
router.route('/delete-post/:studentid').delete((req, res, next) => {
    postSchema.findByIdAndRemove(req.params.studentid, (error,data) => {
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