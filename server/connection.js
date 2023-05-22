const mongoose = require('mongoose');

const dBName = 'AI_Code_generator_with_web_design_Mockups';

const url = `mongodb+srv://ashutoshshubham:ashutosh@cluster0.cqjsjz0.mongodb.net/${dBName}?retryWrites=true&w=majority`

mongoose.connect(url)
.then((result) => {
    console.log("Connected to DB")
})
.catch((err) => {
    console.log(err)
});

module.exports = mongoose;  