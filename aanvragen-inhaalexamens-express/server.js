const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://examenuser:3xamenuser@ds163694.mlab.com:63694/examen', { useNewUrlParser: true },
 (err, database) => {
    if (err) return console.log(err)
    db = database.db('examen')
    app.listen(process.env.PORT || 4000, () => {
      console.log('Listening on port 4000')
    })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
})

app.get('/add', (req, res) => {
	res.sendFile(__dirname + '/views/add.html')
})

app.post('/add', (req, res) => {
	db.collection('inhaal').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('saved to database')
		res.redirect('/')
	})
})