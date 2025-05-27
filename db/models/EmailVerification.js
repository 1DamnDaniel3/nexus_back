import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';

export const EmailVerification = sequelize.define('EmailVerification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    code: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'email_verifications',
    timestamps: false
});
