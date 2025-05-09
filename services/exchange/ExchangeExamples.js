import { ExchangeRequest, UserAccount, UserProfile, Book } from "../../db/index.js";

export class ExchangeExamplesService {
    async getExamples() {
        try {
            const examplesData = await ExchangeRequest.findAll({
                where: { status: "completed" },
                limit: 3,
                attributes: ['id', 'status', 'created_at'], 
                include: [
                    {
                        model: Book,
                        attributes: ['name', 'author', 'img_url'],
                    },
                    {
                        model: UserAccount,
                        as: "Sender",
                        attributes: ['id'],
                        include: [{
                            model: UserProfile,
                            attributes: ['name'],
                        }]
                    },
                    {
                        model: UserAccount,
                        as: "Recipient",
                        attributes: ['id'],
                        include: [{
                            model: UserProfile,
                            attributes: ['name'],
                        }]
                    }
                ]
            });

            const simplifiedData = examplesData.map(item => ({
                id: item.id,
                status: item.status,
                created_at: item.created_at,
                bookTitle: item.Book.name,
                author: item.Book.author,
                cover: item.Book.img_url,
                sender: item.Sender.UserProfile.name,
                recipient: item.Recipient.UserProfile.name
            }));

            return simplifiedData;
        } catch (err) {
            return { error: err.message };
        }
    }
}

export const exchangeExamplesService = new ExchangeExamplesService();