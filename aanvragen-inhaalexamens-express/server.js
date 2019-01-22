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
	var query = { name : req.body.name, exam : req.body.exam, reason : req.body.reason };

	db.collection('inhaal').find( query ).toArray(function(err, result) {
    if (err) throw err;
    if (result != null){
    	console.log("Duplicate!");
    } else {
    	db.collection('inhaal').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('saved to database')
		})
    }
    res.redirect('/')
  });
})

app.get('/search', (req, res) => {
	res.sendFile(__dirname + '/views/search.html')
})

app.post('/search', (req, res) => {
	var query = { name: req.body.name }
	db.collection('inhaal').find( query ).toArray(function(err, result) {
		res.send(result)
	})
})