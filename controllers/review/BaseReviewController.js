import { BaseController } from '../base.Controller.js'
import { Review } from '../../db/index.js'


export class BaseReviewController extends BaseController { 
    constructor() {
        super(Review, 'id')
    }
}

export const baseReviewController = new BaseReviewController;

