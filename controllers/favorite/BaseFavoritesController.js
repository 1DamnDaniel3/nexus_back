import { BaseController } from '../base.Controller.js'
import { Book, Favorite, UserAccount, UserProfile } from '../../db/index.js'
import { getUserFavorites } from '../../services/index.js'


export class BaseFavoritesController extends BaseController {
    constructor() {
        super(Favorite, {
            modelIdName: 'id',
            includes: [
                {
                    model: Book,
                    attributes: ['name', 'author', 'year', 'img_url',]
                },
                {
                    model: UserAccount,
                    attributes: ['id'],
                    include: [{
                        model: UserProfile,
                        attributes: ['name', 'city']
                    }]
                }
            ]
        })
    }

    async findUserFavorites(req, res) {

        try {

            const { user_id } = req.body;


            const response = await getUserFavorites.getUserFav(user_id)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ message: "Internal Server Error", err: err.message })
        }

    }

}

export const baseFavoritesController = new BaseFavoritesController;

