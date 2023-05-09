import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/mycompanydb",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(db => console.log('DB connected succesfully'))
.catch(error => console.log(error))