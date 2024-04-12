const mongoose = require('mongoose')
require('dotenv').config()
const url = "mongodb+srv://<NomeUsuario>:<Senha>a@poderosa.atrkr.mongodb.net/poderosaNoParto?retryWrites=true&w=majority"
mongoose.connect(url, {

    useNewUrlParser: true, 

    useUnifiedTopology: true 
})
mongoose.Promise = global.Promise;
module.exports = mongoose
