import { UserAccount, UserProfile, Book, Genre, BookLanguage, AuthorCountry } from "../../db/index.js";


export class UserBooksService {

    async getUserBooks(user_id) {
        try {
            const userBook = await UserAccount.findOne({
                where: { id: user_id },
                include: [{ model: UserProfile },
                {
                    model: Book,
                    through: { attributes: [] },
                    include: [
                        {model: Genre},
                        {model: BookLanguage},
                        {model: AuthorCountry},
                    ]
                    
                }],
                attributes: []
            })

            if (!userBook) {
                throw new Error("User not found");
            }
            return userBook;
        } catch (error) {
            throw error
        }
    }
}

export const userBooksService = new UserBooksService;