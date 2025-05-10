import { BaseController } from '../base.Controller.js'
import { Book, Genre, AuthorCountry, BookLanguage } from '../../db/index.js'


export class BaseBookController extends BaseController { 
    constructor() {
        super(Book, {
            modelIdName: "id",
            includes: [
                {model: Genre},
                {model: AuthorCountry},
                {model: BookLanguage},
            ]
        })
    }
}

export const baseBookController = new BaseBookController;

