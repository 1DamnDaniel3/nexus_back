import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const ExchangeRequest = sequelize.define('ExchangeRequest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'books',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user_account',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    recipient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user_account',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    delivery_method_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'delivery_methods',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected', 'completed'),
        allowNull: false,
        defaultValue: 'pending'
    },
    request_message: DataTypes.TEXT,
    response_message: DataTypes.TEXT,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    completed_at: DataTypes.DATE
}, {
    tableName: 'exchange_requests',
    timestamps: false,
    hooks: {
        beforeUpdate: (request) => {
            request.updated_at = new Date();
            if (request.status === 'completed' && !request.completed_at) {
                request.completed_at = new Date();
            }
        }
    }
});