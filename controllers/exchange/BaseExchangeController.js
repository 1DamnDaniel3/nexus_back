import { BaseController } from '../base.Controller.js'
import { exchangeExamplesService } from '../../services/index.js'
import { ExchangeRequest } from '../../db/index.js'


export class BaseExchangeController extends BaseController {
    constructor() {
        super(ExchangeRequest, 'id')
    }

    async exchangeExamples(req, res) {

        try {

            const examples = await exchangeExamplesService.getExamples();
            if (!examples || examples.lenght == 0) {
                return res.status(404).json({ message: "No examples were found" });
            }

            return res.status(200).json(examples);

        } catch (error) {
            return res.status(500).json({ message: "Internal Server Error", error: error.message });
        }

    }
}

export const baseExchangeController = new BaseExchangeController;

