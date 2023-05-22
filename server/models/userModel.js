const { Schema, model } = require('../connection')

const mySchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    createdAt: Date,
})

module.exports = model('user', mySchema)