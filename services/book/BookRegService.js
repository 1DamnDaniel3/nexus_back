import { Book, UserBook } from "../../db/index.js";

export class BookRegService {
    async registerBook(bookData, user_id) {
        const transaction = await Book.sequelize.transaction();

        try {
            const newBook = await Book.create(bookData, { transaction });

            await UserBook.create({
                user_id,
                book_id: newBook.id,
                condition: bookData.condition || 'good',
                is_available: true
            }, { transaction });

            await transaction.commit();
            return newBook;

        } catch (err) {
            await transaction.rollback();
            throw err;
        }
    }
}

export const bookRegService = new BookRegService();
