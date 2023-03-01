const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res, next) => res.status(200).json({ msg: 'OK', timestamp: Date.now() }))

app.get('/health', (req, res, next) => res.status(200).json({ msg: 'OK', timestamp: Date.now() }))

app.listen(3000, () => console.log('Server up and listening on port 3000'))
