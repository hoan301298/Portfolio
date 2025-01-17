const nodemailer = require('nodemailer');
const { validateEmail, mailTrapConfig } = require('../../configuration/emailConfig');

async function feedbackForm (req, res) {
    const { email, subject, text } = req.body;

    if(!email || typeof email !== 'string' || !validateEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address'});
    }

    const transporter = nodemailer.createTransport(mailTrapConfig);

    const mailOptions = {
        from: email,
        to: "tranhuuphuchoan@gmail.com",
        subject,
        text
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({message: 'Message sent successfully', info});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' })        
    }
}

module.exports = { 
    feedbackForm
};