import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';


export const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    year: DataTypes.INTEGER,
    img_url: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'books',
    timestamps: false,
    hooks: {
        beforeUpdate: (book) => {
            book.updated_at = new Date();
        }
    }
});
