import { BaseController } from '../base.Controller.js'
import { UserReport, UserAccount, UserProfile } from '../../db/index.js';


export class BaseReportController extends BaseController {
    constructor() {
        super(UserReport, {
            modelIdName: 'id',
            includes: [
                {
                    model: UserAccount,
                    attributed: ['id', 'email', 'is_blocked', 'blocked_at', 'blocked_reason', 'role'],
                    as: "reporter",
                    include: [{ model: UserProfile }]
                },
                {
                    model: UserAccount,
                    as: "reported",
                    attributed: ['id', 'email', 'is_blocked', 'blocked_at', 'blocked_reason', 'role'],
                    include: [{ model: UserProfile }]
                },

            ]
        })
    }

    async getPending(req, res) {

        try {
            const response = await UserReport.findAll({
                where: { status: 'pending' }
            })
            if (!response) {
                return res.status(404).json({ message: "Not Found"})

            }
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message })

        }

    }

}

export const baseReportController = new BaseReportController;

