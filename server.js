const Express = require('express')
const Http = require('http')
const App = Express()
const Server = Http.createServer(App)
const Cors = require('cors')
const Morgan = require('morgan')
const Dotenv = require('dotenv')
const Path = require('path')
const PORT = 7575

App.use(Morgan('dev'))
App.use(Cors())

Server.listen(PORT, () => { console.log(`Server running in port ${ PORT }`) })


// Routes
const Routes = require('./Routes/Routes')
App.use(Routes)

// Middleware
App.use(Express.static(Path.join(__dirname, './angularfe/dist/angularfe')))

// Catch all others route
App.get('*', (req, res) => {
    res.sendFile(Path.join(__dirname, './angularfe/dist/angularfe/index.html'))
})
