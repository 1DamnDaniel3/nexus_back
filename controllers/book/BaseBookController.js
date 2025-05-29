import { BaseController } from '../base.Controller.js'
import { bookRegService } from '../../services/book/BookRegService.js'
import { Book, Genre, AuthorCountry, BookLanguage } from '../../db/index.js'


export class BaseBookController extends BaseController {
    constructor() {
        super(Book, {
            modelIdName: "id",
            includes: [
                { model: Genre },
                { model: AuthorCountry },
                { model: BookLanguage },
            ]
        });
    }

    async create(req, res) {
        try {
            const { user_id, ...bookData } = req.body;

            if (!user_id) {
                return res.status(400).json({ message: "Missing user_id" });
            }

            const newBook = await bookRegService.registerBook(bookData, user_id);

            return res.status(201).json({
                message: "Book created and linked to user successfully",
                data: newBook
            });

        } catch (error) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
}

export const baseBookController = new BaseBookController();
