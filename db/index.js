import { sequelize } from './connection.js';

import {
    AuthorCountry, Book, BookLanguage,
    DeliveryMethod, ExchangeRequest, Genre,
    Review, UserAccount, UserBook, UserProfile,
    Favorite, EmailVerification
} from './models/index.js'

// user_account ↔ user_profile (1:1)
UserAccount.hasOne(UserProfile, { foreignKey: 'user_id', onDelete: 'CASCADE' });
UserProfile.belongsTo(UserAccount, { foreignKey: 'user_id' });

// user_account ↔ user_books (M:N через through + userBook attributes)
UserAccount.belongsToMany(Book, {
  through: UserBook,
  foreignKey: 'user_id',
  otherKey: 'book_id',
});
Book.belongsToMany(UserAccount, {
  through: UserBook,
  foreignKey: 'book_id',
  otherKey: 'user_id',
});
UserAccount.hasMany(UserBook, { foreignKey: 'user_id' });
Book.hasMany(UserBook, { foreignKey: 'book_id' });
UserBook.belongsTo(UserAccount, { foreignKey: 'user_id' });
UserBook.belongsTo(Book, { foreignKey: 'book_id' });

// user_account ↔ favorites (M:N через through)
UserAccount.belongsToMany(Book, {
  through: Favorite,
  foreignKey: 'user_id',
  otherKey: 'book_id',
  as: 'FavoriteBooks',
});
Book.belongsToMany(UserAccount, {
  through: Favorite,
  foreignKey: 'book_id',
  otherKey: 'user_id',
  as: 'UsersWhoFavorited',
});
UserAccount.hasMany(Favorite, { foreignKey: 'user_id' });
Book.hasMany(Favorite, { foreignKey: 'book_id' });
Favorite.belongsTo(UserAccount, { foreignKey: 'user_id' });
Favorite.belongsTo(Book, { foreignKey: 'book_id' });

// book ↔ genre (1:N)
Genre.hasMany(Book, { foreignKey: 'genre_id' });
Book.belongsTo(Genre, { foreignKey: 'genre_id' });

// book ↔ book_language (1:N)
BookLanguage.hasMany(Book, { foreignKey: 'lang_id' });
Book.belongsTo(BookLanguage, { foreignKey: 'lang_id' });

// book ↔ author_country (1:N)
AuthorCountry.hasMany(Book, { foreignKey: 'country_id' });
Book.belongsTo(AuthorCountry, { foreignKey: 'country_id' });

// exchange_requests ↔ book (1:N)
Book.hasMany(ExchangeRequest, { foreignKey: 'book_id' });
ExchangeRequest.belongsTo(Book, { foreignKey: 'book_id' });

// exchange_requests ↔ user_account (sender_id & recipient_id as 2 FK) (1:N)
UserAccount.hasMany(ExchangeRequest, { foreignKey: 'sender_id', as: 'SentRequests' });
UserAccount.hasMany(ExchangeRequest, { foreignKey: 'recipient_id', as: 'ReceivedRequests' });
ExchangeRequest.belongsTo(UserAccount, { foreignKey: 'sender_id', as: 'Sender' });
ExchangeRequest.belongsTo(UserAccount, { foreignKey: 'recipient_id', as: 'Recipient' });

// exchange_requests ↔ delivery_methods (1:N)
DeliveryMethod.hasMany(ExchangeRequest, { foreignKey: 'delivery_method_id' });
ExchangeRequest.belongsTo(DeliveryMethod, { foreignKey: 'delivery_method_id' });

// user_account ↔ reviews (1:1)
UserAccount.hasOne(Review, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Review.belongsTo(UserAccount, { foreignKey: 'user_id' });



export {
    AuthorCountry, Book, BookLanguage,
    DeliveryMethod, ExchangeRequest, Genre,
    Review, UserAccount, UserBook, UserProfile,
    Favorite, EmailVerification
}