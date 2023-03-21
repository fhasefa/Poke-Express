// Load mongoose
const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

// Instantiate a new Schema object for fruit and structure our data
const pokeSchema = new Schema({
    name: { 
        // expecting the "name" property to be a string
        type: String,
        // validation to make sure the data is legit 
        required: true
    },
    image: { type: String}
})

// create our model using our pokeSchema and give our collection a name of "fruits"
const Pokemon = mongoose.model('pokemons', pokeSchema)

// exporting the Fruit model as a module
module.exports = Pokemon