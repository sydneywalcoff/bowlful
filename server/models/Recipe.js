const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');
const User = require('./User');

class Recipe extends Model { }

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ingredients: {
            type: DataTypes.JSON,
            allowNull: false
        },
        instructions: {
            type: DataTypes.STRING,
            allowNull: false
        },
        favorite: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        haveTried: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                keys: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
)

module.exports = Recipe;