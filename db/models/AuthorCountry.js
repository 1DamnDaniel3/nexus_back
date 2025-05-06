import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';


export const AuthorCountry = sequelize.define('AuthorCountry', {
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
    tableName: 'author_countries',
    timestamps: false
});