const express = require('express')
const Student = require('../models/Student')
const router = express.Router()


router.post('/enroll', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); // Replace '*' with your desired origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
        let { name, fathersName, gender, surname, studentWhatsapp, parentWhatsapp, email, address, alreadyStudying, admissionClass } = await req.body

        let student = new Student({ name, fathersName, gender, surname, studentWhatsapp, parentWhatsapp, email, address, alreadyStudying, admissionClass });
        await student.save()
        res.send({ success: true, message: "Form Successfully Submitted" })
    } catch (error) {
        res.send({success: false, message: `Failed To Submit: ${error}` })
    }
})

module.exports = router
