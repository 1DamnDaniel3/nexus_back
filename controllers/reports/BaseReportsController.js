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

}

export const baseReportController = new BaseReportController;

