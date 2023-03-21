require('dotenv').config()
const express = require('express');
// const pokemon = require('./models/pokemon');

const app = express();

const PORT = 3000;

const connectDB = require('./config/db')
connectDB()

const Pokemon = require('./models/mongoPokemomn')

// const pokemonRoute = require('./routes/pokemonRoute')

const { createEngine } = require('jsx-view-engine')
// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

app.use(express.urlencoded({ extended: true }))

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!')
})


app.get('/pokemon', async(req, res) => {
    // use the model to interact with db and create a new document in the fruit collection
    const pokemon = await Pokemon.find()
    console.log(pokemon)
    res.render('./Index', {pokemon: pokemon})
    // res.render('./Index', {pokemon: pokemon})
})

app.get('/pokemon/new', (req, res) => {
    res.render('./New')
})

// app.use('/pokemon', pokemonRoute)
app.get('/pokemon/:id', async(req,res) => {
    try {
        pokemon = await Pokemon.findById(req.params.id)
        res.render('./Show', {pokemon: pokemon})
    } catch (error) {
        console.log(error)
    }
})

app.post('/pokemon', async (req,res) => {
    try {
        // use the model to interact with db and create a new document in the fruit collection
        const pokemon = await Pokemon.create(req.body)
        console.log(pokemon)
    } catch(err) {
        console.log(err)
    }

    res.redirect('/pokemon')
})

app.listen(PORT, () => {
    console.log('Listening on...' + PORT)
});