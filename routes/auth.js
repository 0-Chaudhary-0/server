const express = require('express')
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require("jsonwebtoken");
const router = express.Router()


// SignUp API Is Here
router.post('/signup', async (req, res) => {
    try {
        let { name, email, password } = await req.body

        // Encrypt
        const cipherPassword = CryptoJS.AES.encrypt(JSON.stringify(password), '#@chaudhary@#').toString();

        // JWT Token
        const token = jwt.sign({ email }, "#@chaudhary@#");

        let items = new User({ name, email, password: cipherPassword });
        await items.save()
        res.send({ success: true, message: "Successfully Created An Account", token: token })
    } catch (error) {
        res.send({success: false, error: `Failed To Create: ${error}` })
    }
})

module.exports = router
