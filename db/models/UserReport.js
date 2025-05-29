import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const UserReport = sequelize.define('UserReport', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    reporter_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reported_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    reason: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'pending',
        validate: {
            isIn: [['pending', 'reviewed', 'action_taken', 'dismissed']]
        }
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    reviewed_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'user_reports',
    timestamps: false
});
