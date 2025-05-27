import { sendVerificationEmail } from './mailerService.js';
import { EmailVerification } from '../../db/index.js';

export class VerificationService {
    async sendCode(email) {
        const code = Math.floor(100000 + Math.random() * 900000).toString(); 
        const expires_at = new Date(Date.now() + 10 * 60 * 1000);

        await EmailVerification.upsert({
            email,
            code,
            expires_at,
            verified: false
        });

        await sendVerificationEmail(email, code);

        return { message: 'Verification code sent' };
    }

    async confirmCode(email, inputCode) {
        const record = await EmailVerification.findOne({ where: { email } });

        if (!record) throw new Error('No code found for this email');
        if (record.verified) throw new Error('Email already verified');
        if (record.code !== inputCode) throw new Error('Incorrect verification code');
        if (new Date(record.expires_at) < new Date()) throw new Error('Verification code expired');

        record.verified = true;
        await record.save();

        return { message: 'Email verified successfully' };
    }
}

export const verificationService = new VerificationService();
