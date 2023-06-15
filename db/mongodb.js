const mongoose=require('mongoose');
mongoose.connect(process.env.mongodb_url)
.then(()=>{
    console.log("Connected to database MongoDB Atlas")
})
.catch(()=>{
    console.log("Error!!!Not connected to database")
})