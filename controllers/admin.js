const { json } = require('body-parser')
const User = require('../models/user')

exports.getUserInfo = async (req, res, next) => {
    
    try {
        const data = await User.findAll()
        res.json(data)
    }
    catch(err) {console.log(err)}
}

exports.postUserInfo = async (req, res, next) => {
    try {
    const name = req.body.name
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const data = await User.create({
        name: name,
        phoneNumber: phoneNumber,
        email: email
    })
    res.json(data)
        
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const data = await User.destroy({where: {id:req.params.id}})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}