import { BaseController } from '../base.Controller.js'
import { AuthorCountry } from '../../db/index.js'


export class BaseCountriesController extends BaseController { 
    constructor() {
        super(AuthorCountry, 'id')
    }
}

export const baseCountriesController = new BaseCountriesController;

