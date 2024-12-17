const User = require("./User");
const Recipe = require("./Recipe");
const Note = require("./Note");

User.hasMany(Recipe, {
    foreignKey: 'user_id'
});

Recipe.belongsTo(User, {
    foreignKey: 'user_id'
});

Recipe.hasMany(Note, {
    foreignKey: 'recipe_id'
});

Note.belongsTo(Recipe, {
    foreignKey: 'recipe_id'
});

User.hasMany(Note, {
    foreignKey: 'user_id'
});

Note.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Recipe, Note };