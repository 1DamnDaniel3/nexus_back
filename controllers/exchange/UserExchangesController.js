import { userExchangesService } from '../../services/index.js'


export class UserExchangesController {

    async getAll(req, res) {

        try {

            const { user_id, status } = req.body;
            const exchanges = await userExchangesService.getUserExchanges(user_id, status)

            return res.status(200).json(exchanges)
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }

    }

}

export const userExchangesController = new UserExchangesController;