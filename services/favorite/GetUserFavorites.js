import { response } from "express";
import { UserAccount, Favorite, Book, UserProfile } from "../../db/index.js";


export class GetUserFavorites {

    async getUserFav(user_id) {

        try {

            const response = await Favorite.findAll({
                where: { user_id },
                include: [{
                    model: Book,
                    attributes: ['name', 'author', 'year', 'img_url', 'description']
                }]
            })

            const simplifyResponse = response.map(item => ({
                id: item.id,
                created_at: item.created_at,
                book_title: item.Book.name,
                book_author: item.Book.author,
                book_year: item.Book.year,
                book_cover: item.Book.img_url,
                book_description: item.Book.description,

                
            }))
            return simplifyResponse
        } catch (error) {
            return error.message
        }

    }

}

export const getUserFavorites = new GetUserFavorites;