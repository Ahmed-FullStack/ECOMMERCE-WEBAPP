const express = require('express')
const ejs = require('ejs')

const app = express()
let post
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.render('ebay', { url: post })
})
app.get('/sell', (req, res) => {
	res.render('sell')
})

app.post('/sell', (req, res) => {
	console.log(req.body)
	res.render('forselling', {
		itemPrice: req.body.itemPrice,
		itemName: req.body.itemName,
		itemImg: req.body.url,
	})

	post = req.body.url
})

app.listen(3000)
