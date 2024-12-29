
const Express=require('express')
const Sql=require('mysql')
const Cors=require('cors')
const uuid=require('uuid');
const app=Express();
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
const nodemailer = require('nodemailer');
app.use(Express.json()); // Add this line to enable JSON parsing
app.use(Cors())

const db=Sql.createConnection({
    host:'localhost',
    user:'root',
    port: 3306,
    password:"Test@123",
    database:'pet_adaption'

})



db.connect((err) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Database connected successfully');
  
  });


app.listen(8081,()=>{
    console.log("Running Successfully");
  })