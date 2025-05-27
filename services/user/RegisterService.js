import { UserAccount, UserProfile, EmailVerification } from '../../db/index.js';

export class RegisterService {
    async registerUser(data) {
        const { account, profile } = data;

        const verification = await EmailVerification.findOne({
            where: { email: account.email }
        });

        if (!verification || !verification.verified) {
            throw new Error('Email not verified');
        }

        const transaction = await UserAccount.sequelize.transaction();

        try {
            const newAccount = await UserAccount.create({
                email: account.email,
                password: account.password
            }, { transaction });

            const newProfile = await UserProfile.create({
                user_id: newAccount.id,
                name: profile.name || '',
                phone: profile.phone || null,
                city: profile.city || null,
                birthdate: profile.birthday || null
            }, { transaction });

            await transaction.commit();

            return {
                account: { id: newAccount.id, email: newAccount.email },
                profile: newProfile
            };

        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}


export const registerService = new RegisterService();