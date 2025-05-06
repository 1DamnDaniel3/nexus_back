import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';


export const BookLanguage = sequelize.define('BookLanguage', {
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
    tableName: 'book_languages',
    timestamps: false
});
