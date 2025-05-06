import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';


export const UserProfile = sequelize.define('UserProfile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    phone: DataTypes.STRING(20),
    city: DataTypes.STRING(100),
    birthdate: DataTypes.DATEONLY,
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'user_profile',
    timestamps: false,
    hooks: {
        beforeUpdate: (profile) => {
            profile.updated_at = new Date();
        }
    }
});
