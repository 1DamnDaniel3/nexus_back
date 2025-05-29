import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
import bcrypt from 'bcryptjs';

export const UserAccount = sequelize.define('UserAccount', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash);
        }
    },
    role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'user'
    },
    is_blocked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    blocked_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    blocked_reason: {
        type: DataTypes.TEXT,
        allowNull: true
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
    tableName: 'user_account',
    timestamps: false,
    hooks: {
        beforeUpdate: (user) => {
            user.updated_at = new Date();
        }
    }
});
