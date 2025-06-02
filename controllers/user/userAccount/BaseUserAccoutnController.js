import { BaseController } from '../../base.Controller.js'
import { UserAccount, UserProfile } from '../../../db/index.js'


export class BaseUserAccountController extends BaseController {
    constructor() {
        super(UserAccount, {
            modelIdName: 'id',
            includes: [
                { model: UserProfile }
            ]
        })
    }

    async getWithEmail(req, res) {
        try {
            const { email } = req.body;
            const response = await UserAccount.findOne({
                where: { email: email },
                attributes: ['id']
            })
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })
        }
    }
}

export const baseUserAccountController = new BaseUserAccountController;

