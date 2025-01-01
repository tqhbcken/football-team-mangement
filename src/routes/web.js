const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.ejs');
});


router.get('/create-player', (req, res) => {
    res.render('create-player.ejs');
});

router.get('/team', (req, res) => {
    res.render('team.ejs');
});

router.post('/create-team', (req, res) => {
    res.render('create-team.ejs');
})

module.exports = router;