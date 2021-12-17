// save user in mongodb

/* dbPassword = 'mongodb+srv://abc:123abc@cluster0.d8sae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = {
    mongoURI: dbPassword
}; */


const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection error: ",err));

module.exports = {
    mongoURI: process.env.DATABASE
};
