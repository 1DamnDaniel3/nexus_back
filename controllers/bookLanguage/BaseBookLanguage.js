import { BaseController } from '../base.Controller.js'
import { BookLanguage } from '../../db/index.js';


export class BaseLanguageController extends BaseController {
    constructor() {
        super(BookLanguage, {
            modelIdName: 'id',

        })
    }

}

export const baseLanguageController = new BaseLanguageController;

