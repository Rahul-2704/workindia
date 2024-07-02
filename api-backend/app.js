const express=require('express');
require('dotenv').config()
const app=express();
const cors = require("cors");
const cookieSession = require("cookie-session");
const PORT=process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "bezkoder-session",
    secret:"my-secret", 
    httpOnly: true,
  })
);
require('./routes/auth-routes.js')(app);
require('./routes/user-routes.js')(app);
// require('./routes/user-routes.js')(app);

const db = require("./models");
const Role = db.role;

db.sequelize.sync()

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });
  }


app.get('/',(req,res)=>{
    return res.json({"message":"Welcome to Zoomcar"})
})

app.listen(PORT,()=>{
    console.log(`Server listening on PORT ${PORT}`)
})