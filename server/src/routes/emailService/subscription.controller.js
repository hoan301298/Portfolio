const nodemailer = require('nodemailer');
const { validateEmail} = require('../../configuration/emailValidation');
const Subscriber = require('../../models/subscription.mongo');

async function sendEmail (req, res) {
    const { email } = req.body;
    console.log(email);
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
        from: '"Hoan Tran 🐯" <tranhuuphuchoan@gmail.com>',
        to: email,
        subject: "Thank you for subscription!",
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h1 style="color: #007bff;">Welcome, and thank you for subscribing!</h1>
                <p>Dear Subscriber,</p>
                <br>
                <p>Thank you for showing interest in my profile and work. I’m thrilled to connect with you and share my projects. I invite you to explore my GitHub repositories to see my latest work and contributions:</p>
                <p>
                    <a href="https://github.com/hoan301298" style="color: #007bff; text-decoration: none;" target="_blank">
                        Visit My GitHub Profile
                    </a>
                </p>
                <p>If you have any questions or would like to collaborate, feel free to reach out by replying to this email. I’d be delighted to hear from you!</p>
                <br>
                <p>Best regards,</p>
                <p><strong>Hoan Tran</strong></p>
            </div>
        `,
    }
    try {
        const info = await transporter.sendMail(mailOptions);
        const newSubscriber = new Subscriber({
            email: email
        });
        await newSubscriber.save();
        res.status(200).json({message: 'Subscription email sent successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error })        
    }
}

module.exports = {
    sendEmail
};