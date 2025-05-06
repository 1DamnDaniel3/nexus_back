import { BaseController } from '../../base.Controller.js'
import { UserAccount } from '../../../db/index.js'


export class BaseUserAccountController extends BaseController { 
    constructor() {
        super(UserAccount, 'id')
    }
}

export const baseUserAccountController = new BaseUserAccountController;

