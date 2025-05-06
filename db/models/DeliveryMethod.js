import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';


export const DeliveryMethod = sequelize.define('DeliveryMethod', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    description: DataTypes.TEXT
}, {
    tableName: 'delivery_methods',
    timestamps: false
});
