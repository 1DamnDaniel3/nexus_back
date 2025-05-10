import { BaseController } from '../base.Controller.js'
import { Genre } from '../../db/index.js'


export class BaseGenresController extends BaseController { 
    constructor() {
        super(Genre, 'id')
    }
}

export const baseGenresController = new BaseGenresController;

