import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';


export const Genre = sequelize.define('Genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'genres',
    timestamps: false
});
