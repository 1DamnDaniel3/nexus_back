import { BaseController } from '../base.Controller.js'
import { Book } from '../../db/index.js'


export class BaseBookController extends BaseController { 
    constructor() {
        super(Book, 'id')
    }
}

export const baseBookController = new BaseBookController;

