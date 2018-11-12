const port = 3000
const express = require('express')
app = express()
const mustacheExpress = require('mustache-express')
const models = require('./models')
const bodyParser = require('body-parser')

app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')

app.use(bodyParser.urlencoded({ extended: false}))


app.post('/delete_store', function(req,res){
    id = req.body.store_id
    models.store.destroy({
        where: {
            id : id
        }
    }).then(function(){
        console.log('STORE DELETED')
        res.redirect('/')
    })
})

app.post('/add_store', function(req,res){
    
    name = req.body.store_name
    city = req.body.city_name
    state = req.body.state_name
    street = req.body.street_name
    
    let store = models.store.build({
        name: name,
        street: street,
        city: city,
        state: state
    })

    store.save().then(function(newPost){
        res.redirect('/')
      })

})

app.get('/', function(req, res){
    models.store.findAll().then(function(stores){
       res.render('home', {stores}) 
    })
    
})

app.listen(port, function(req, res){
    console.log("Server running my guy...")
})