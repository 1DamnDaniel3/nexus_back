import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const Favorite = sequelize.define('Favorite', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user_account',
            key: 'id'
        }
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'books',
            key: 'id'
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'favorites',
    timestamps: false,
    indexes: [
        {
            name: 'idx_favorites_user',
            fields: ['user_id']
        },
        {
            name: 'idx_favorites_book',
            fields: ['book_id']
        },
        {
            name: 'idx_favorites_user_book',
            fields: ['user_id', 'book_id'],
            unique: true
        }
    ]
});