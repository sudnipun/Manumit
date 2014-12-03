var express=require('express');
var app=express();
require('../router/main.js')(app);

app.use("/img",express.static("../img"));
app.use("/css",express.static("../css"));
app.use("/js",express.static("../js"));
app.use("/templates",express.static("../templates"));
app.set('views', '../views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var server=app.listen(3000,function(){
console.log("Express is running on port 3000");
});