import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/companydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Db is connected"))
    .catch(error => console.log(error))