import { ExchangeRequest, UserAccount, UserProfile, Book, DeliveryMethod } from "../../db/index.js";
import { Op } from 'sequelize'


export class UserExchangesService {

    async getUserExchanges(user_id, status) {
        try {
            const response = await ExchangeRequest.findAll({
                attributes: ['id', 'status', 'request_message',
                    'response_message', 'created_at', 'completed_at'],
                where: {
                    [Op.or]: [
                        { sender_id: user_id, },
                        { recipient_id: user_id, },
                    ],
                    status: status,
                },
                include: [{
                    model: Book,
                    attributes: ['name', 'author', 'img_url'],

                }, {
                    model: UserAccount,
                    as: "Sender",
                    include: [{
                        model: UserProfile,
                    }]
                }, {
                    model: UserAccount,
                    as: "Recipient",
                    include: [{
                        model: UserProfile,
                    }]
                }, {
                    model: DeliveryMethod
                }]

            })

            const simplifiedData = response.map(item => ({
                id: item.id,
                status: item.status,
                deliveryMethod: item.DeliveryMethod.name,
                request_message: item.request_message,
                response_message: item.response_message,
                created_at: item.created_at,
                completed_at: item.completed_at,
                Book: {
                    name: item.Book.name,
                    author: item.Book.author,
                    cover: item.Book.img_url
                },
                Sender: {
                    id: item.Sender.id,
                    name: item.Sender.UserProfile.name,
                    phone: item.Sender.UserProfile.phone,
                    city: item.Sender.UserProfile.city,
                },
                Recipient: {
                    id: item.Recipient.id,
                    name: item.Recipient.UserProfile.name,
                    phone: item.Recipient.UserProfile.phone,
                    city: item.Recipient.UserProfile.city,
                },
            }))

            return simplifiedData
        } catch (error) {
            return error.message
        }

    }

}

export const userExchangesService = new UserExchangesService;