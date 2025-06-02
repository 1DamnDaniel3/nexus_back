import { UserAccount, UserProfile, Book, Favorite, Genre, BookLanguage, AuthorCountry, UserBook } from "../../db/index.js";


export class UserFavoriteService {

    async getUserFavorites(user_id) {
        try {
            const userBook = await UserAccount.findOne({
                where: { id: user_id },
                include: [{ model: UserProfile },
                {
                    model: Favorite,
                    attributes: ['id'],
                    include: [{
                        model: Book,
                        include: [
                            { model: Genre },
                            { model: BookLanguage },
                            { model: AuthorCountry },
                            { model: UserBook },
                        ]

                    }]
                }
                ],
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

export const userFavoriteService = new UserFavoriteService;