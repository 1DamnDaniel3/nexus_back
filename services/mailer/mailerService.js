import { transporter } from '../../mailer/config.js'
import dotenv from 'dotenv'
dotenv.config()

export const sendVerificationEmail = async (email, code) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification Code',
        html: `<p>Your verification code is: <b>${code}</b></p>`
    });
};