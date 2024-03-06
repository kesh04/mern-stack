require('dotenv').config()

const  express = require('express')
const workoutsRoutes = require('./routes/workouts')
const  mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const  app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path);
    next();
});

app.use('/api/workouts',workoutsRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connected to db &  port", process.env.PORT);
    })
    
})
.catch((error)=>{
    console.log(error);

})

