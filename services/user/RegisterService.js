import { UserAccount, UserProfile } from '../../db/index.js';

export class RegisterService {
    async RegisterUser(data) {
        if (!data || !data.account || !data.profile) {
            throw new Error('Invalid data structure');
        }

        const { account, profile } = data;

        if (!account.email || !account.password) {
            throw new Error('Email and password are required');
        }

        try {
            const existingUser = await UserAccount.findOne({
                where: { email: account.email }
            });

            if (existingUser) {
                throw new Error('User with this email already exists');
            }

            const transaction = await UserAccount.sequelize.transaction();

            try {
                const newAccount = await UserAccount.create({
                    email: account.email,
                    password: account.password, 
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
                    account: {
                        id: newAccount.id,
                        email: newAccount.email,
                        role: newAccount.role,
                        created_at: newAccount.created_at
                    },
                    profile: {
                        name: newProfile.name,
                        phone: newProfile.phone,
                        city: newProfile.city,
                        birthdate: newProfile.birthdate
                    }
                };

            } catch (error) {
                await transaction.rollback();
                throw error;
            }

        } catch (error) {
            throw error;
        }
    }
}

export const registerService = new RegisterService();