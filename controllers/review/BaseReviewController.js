import { BaseController } from '../base.Controller.js'
import { UserAccount, Review, UserProfile } from '../../db/index.js';


export class BaseReviewController extends BaseController {
    constructor() {
        super(Review, {
            modelIdName: 'id',
            includes: [
                {model: UserAccount, attributes: ['id'],
                    include: [{
                        model: UserProfile,
                        attributes: ['name']
                    }]
                },
                


            ]
        })
    }

}

export const baseReviewController = new BaseReviewController;

