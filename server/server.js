const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('API Server listening on port: ' + PORT));
})