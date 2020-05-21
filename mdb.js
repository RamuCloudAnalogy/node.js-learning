var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  name: String,
  emailid: String,
  etype: String,
  hourlyrate: Number,
  to:16,

  });
  employeeSchema.methods.totalSalary= ()=> {
    return this.hourlyrate* this.totalHour;
  }

  var employeeModel = mongoose.model('Employee', employeeSchema );
  var employess = new employeeModel({name:'ram',
  emailid:'dalli.ramu@gmail.com',
etype:'hourly',
hourlyrate:10,
totalHour:16,});

 employeeModel.total = employees.totalSalary();

 conn.on('connected',function(){
   console.log('Connected Successfully');
 });

 conn.on('Disconnected',function(){
   console.log('Disconnected Successfully');
 });

 conn.on ('error', console.error.bind(console,'connection error:'));
 conn.once('open',function(){
   employees.save(function(err,res){
     if (err) throw errors;
     console.log(res);
     conn.close();

   });
 });

    

