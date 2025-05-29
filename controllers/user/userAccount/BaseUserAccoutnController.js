import { BaseController } from '../../base.Controller.js'
import { UserAccount, UserProfile } from '../../../db/index.js'


export class BaseUserAccountController extends BaseController { 
    constructor() {
        super(UserAccount, {
            modelIdName: 'id',
            includes: [
                {model: UserProfile}
            ]
         })
    }
}

export const baseUserAccountController = new BaseUserAccountController;

