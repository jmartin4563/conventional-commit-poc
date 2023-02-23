const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res, next) => res.status(200).json({ message: 'OK' }))

app.get('/health', (req, res, next) => res.status(200).json({ message: 'OK' }))

app.listen(4000, () => console.log('Server up and listening on port 4000'))
