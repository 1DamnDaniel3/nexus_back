import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';



export const UserBook = sequelize.define('UserBook', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    condition: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'good'
    },
    is_available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'user_books',
    timestamps: false,
    hooks: {
        beforeUpdate: (userBook) => {
            userBook.updated_at = new Date();
        }
    }
});