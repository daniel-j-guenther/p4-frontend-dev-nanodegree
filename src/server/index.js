/* AmazingAI - App Endpoint */
projectData = {};

/* AmazingAI - Dependencies */
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

/* AmazingAI - App instance */
const app = express()

/* AmazingAI - Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* AmazingAI - Cross origin allowance */
const cors = require('cors');
app.use(cors());  

/* AmazingAI - App instance */
app.use(express.static('dist'))

/* AmazingAI - Localhost */
app.listen(3072, ()=>{console.log('AmazingAI on port 3072!')})

/* AmazingAI - Asynchronouse GET/POST routes */
console.log(__dirname)
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})