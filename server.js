const app = require('./app')


// There is some bug in my pc while using environment variable
// const dotenv = require('dotenv');
// dotenv.config({path: '.env'})

// const path = process.env.PORT

app.listen(4000, ()=>{
    console.log(`listing on port 4000`);
})