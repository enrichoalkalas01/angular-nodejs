const Express = require('express')
const Routes = Express.Router()

Routes.get('/dev', (req, res) => {
    res.send('tester')
})

Routes.post('/dev/register', (req, res) => {
    console.log(req.body)
    res.send({
        message: 'ok'
    })
})

Routes.get('/dev/tester', (req, res) => {
    res.send({
        message: 'ok tester'
    })
})

module.exports = Routes