import { BaseController } from '../../base.Controller.js'
import { userBooksService } from '../../../services/index.js'
import { UserAccount } from '../../../db/index.js'


export class UserBooksController {

    async getUserBooks(req, res) {
        try {

            const { user_id } = req.body;

            const books = await userBooksService.getUserBooks(user_id);

            res.status(200).json(books.Books)

        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" })
        }
    }

}

export const userBooksController = new UserBooksController;

