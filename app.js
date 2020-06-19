require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const compression = require('compression')

const app = express()

app.use(compression())
app.use(express.json({ limit: '1000mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(morgan('combined'))

const datasource = require('./src/model')
app.datasource = datasource(app)
require('./src/routes')(app)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}!`))