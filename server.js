var express=require('express');
var app=express();
require('./manumit/router/main.js')(app);

app.use("/img",express.static(__dirname + "/img"));
app.use("/css",express.static(__dirname + "/css"));
app.use("/js",express.static(__dirname + "/js"));
app.use("/templates",express.static(__dirname + "/templates"));
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
var server=app.listen(3000,function(){
console.log("Express is running on port 3000");
});