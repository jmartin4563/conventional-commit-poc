const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res, next) => res.status(200).json({ msg: 'OK', timestamp: Date.now(), foo: 'bar' }))

app.get('/healthz', (req, res, next) => res.status(200).json({ msg: 'OK', timestamp: Date.now(), foo: 'bar' }))

app.listen(3000, () => console.log('Server ready to accept requests'))
