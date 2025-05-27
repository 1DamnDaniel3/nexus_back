import { BaseController } from '../../base.Controller.js'
import { userFavoriteService } from '../../../services/index.js'


export class UserFavoritesController {

    async getUserFavorites(req, res) {
        try {

            const { user_id } = req.body;

            const favorites = await userFavoriteService.getUserFavorites(user_id);

            res.status(200).json(favorites)

        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    }

}

export const userFavoritesController = new UserFavoritesController;

