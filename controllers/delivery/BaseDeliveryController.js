import { BaseController } from '../base.Controller.js'
import { DeliveryMethod } from '../../db/index.js'


export class BaseDeliveryController extends BaseController { 
    constructor() {
        super(DeliveryMethod, 'id')
    }
}

export const baseDeliveryController = new BaseDeliveryController;

