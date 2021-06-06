const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/RegisterModels')

router.post('/register', (request, response) => {

    const registerUser = new registerTemplateCopy({
        fullname:request.body.fullname,
        email:request.body.email,
        university:request.body.university,
        department:request.body.department,
        faculty:request.body.faculty,
        studentid:request.body.studentid,
        username:request.body.username,
        password:request.body.password,
        comfirmpassword:request.body.comfirmpassword,
        address:request.body.address
    })
    registerUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/register')
module.exports = router