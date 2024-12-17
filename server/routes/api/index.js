const router = require('express').Router();
const recipeRoutes = require('./recipe-routes');

router.use(recipeRoutes);

router.use((req, res) => { res.status(404).end(); });

module.exports = router;