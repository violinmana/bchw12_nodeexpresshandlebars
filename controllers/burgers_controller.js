var app = require('express')
var router = express.Router();

var burger = require('../models/burger.js')

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        var burgersObject = {
            burgers: data
        }
        res.render('index', burgersObject)
    })
})

router.post('/burgers', (req, res) => {
    if (!req.body.burgerName) return res.status(404).end()

    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burgerName, false
    ], (data) => {
        res.redirect('/')
    })
})

router.put('/burgers/:id', (req, res) => {
    var id = req.params.id

    burger.updateOne('devoured', true, id, (data) => {
        if (data.changedRows === 0) return res.status(404).end()
        else return res.status(200).end()
    })
})

router.post('/burgers')