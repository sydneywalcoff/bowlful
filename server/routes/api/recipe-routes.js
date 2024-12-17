const router = require('express').Router();

const { Recipe, Note, User } = require('../../models');

// Get all Recipes
router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: ['id', 'name', 'ingredients', 'instructions', 'favorite', 'url', 'have_tried', 'user_id', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Note,
                attributes: ['id', 'text', 'created_at', 'user_id'],
                include: [{
                    model: User
                }]
            },
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// Get Recipe by ID

// Add new Recipe

// Update Recipe

// Delete Recipe