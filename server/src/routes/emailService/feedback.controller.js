const nodemailer = require('nodemailer');
const { validateEmail } = require('../../configuration/emailValidation');
const Subscriber = require('../../models/subscription.mongo');

async function feedbackForm (req, res) {
    const { email, subject, message } = req.body;
    if(!email || typeof email !== 'string' || !validateEmail(email)) {
        return res.status(400).json({ error: 'Invalid email address'});
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: email,
        to: "tranhuuphuchoan@gmail.com",
        subject: subject,
        html:
            `
                <div>${email}</div> </br>
                </br>
                ${message}
            `,
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        const newSubscriber = new Subscriber({
            email: email
        });
        await newSubscriber.save();
        res.status(200).json({message: 'Message sent successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send message' })        
    }
}

module.exports = { 
    feedbackForm
};