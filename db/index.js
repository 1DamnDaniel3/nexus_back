import { sequelize } from './connection.js';

import {
    AuthorCountry, Book, BookLanguage,
    DeliveryMethod, ExchangeRequest, Genre,
    Review, UserAccount, UserBook, UserProfile,
    Favorite,
} from './models/index.js'

// Определение связей между моделями
UserAccount.hasOne(UserProfile, { foreignKey: 'user_id', onDelete: 'CASCADE' });
UserProfile.belongsTo(UserAccount, { foreignKey: 'user_id' });

UserAccount.hasMany(UserBook, { foreignKey: 'user_id' });
UserBook.belongsTo(UserAccount, { foreignKey: 'user_id' });

Book.hasMany(UserBook, { foreignKey: 'book_id' });
UserBook.belongsTo(Book, { foreignKey: 'book_id' });

Genre.hasMany(Book, { foreignKey: 'genre_id' });
Book.belongsTo(Genre, { foreignKey: 'genre_id' });

AuthorCountry.hasMany(Book, { foreignKey: 'country_id' });
Book.belongsTo(AuthorCountry, { foreignKey: 'country_id' });

BookLanguage.hasMany(Book, { foreignKey: 'lang_id' });
Book.belongsTo(BookLanguage, { foreignKey: 'lang_id' });

DeliveryMethod.hasMany(ExchangeRequest, { foreignKey: 'delivery_method_id'});
ExchangeRequest.belongsTo(DeliveryMethod, { foreignKey: 'delivery_method_id' });

Book.hasMany(ExchangeRequest, { foreignKey: 'book_id', onDelete: 'CASCADE' });
ExchangeRequest.belongsTo(Book, { foreignKey: 'book_id' });

UserAccount.hasMany(ExchangeRequest, { foreignKey: 'sender_id', as: 'SentRequests', onDelete: 'CASCADE' });
ExchangeRequest.belongsTo(UserAccount, { foreignKey: 'sender_id', as: 'Sender' });

UserAccount.hasMany(ExchangeRequest, { foreignKey: 'recipient_id', as: 'ReceivedRequests', onDelete: 'CASCADE'});
ExchangeRequest.belongsTo(UserAccount, { foreignKey: 'recipient_id', as: 'Recipient' });

UserAccount.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(UserAccount, { foreignKey: 'user_id' });

Book.hasMany(Review, { foreignKey: 'book_id' });
Review.belongsTo(Book, { foreignKey: 'book_id' });

UserAccount.hasMany(Favorite, { foreignKey: 'user_id' });
Favorite.belongsTo(UserAccount, { foreignKey: 'user_id' });

Book.hasMany(Favorite, { foreignKey: 'book_id' });
Favorite.belongsTo(Book, { foreignKey: 'book_id' });


export {
    AuthorCountry, Book, BookLanguage,
    DeliveryMethod, ExchangeRequest, Genre,
    Review, UserAccount, UserBook, UserProfile,
    Favorite,
}