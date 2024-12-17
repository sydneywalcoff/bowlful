const router = require('express').Router();

const { json } = require('sequelize');
const { Recipe, Note, User } = require('../../models');

// Get all Recipes
router.get('/', (req, res) => {
    Recipe.findAll({
        attributes: ['id', 'name', 'ingredients', 'instructions', 'url', 'have_tried', 'user_id', 'created_at'],
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
router.post('/', (req, res) => {
    // convert ingredients list to JSON
    let ingredientsJSON = json(req.body.ingredients);
    console.log(ingredientsJSON);
    // Recipe.create({
    //     name: req.body.name,
    //     ingredients: ingredientsJSON,
    //     instructions: req.body.instructions,
    //     url: req.body.url,
    //     have_tried: req.body.haveTried,
    //     user_id: req.body.userId
    // })
    //     .then(data => res.json(data))
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json(err);
    //     })
});

// Update Recipe

// Delete Recipe


module.exports = router;