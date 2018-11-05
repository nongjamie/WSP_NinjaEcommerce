const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const expressValidator =require('express-validator')
const flash = require('connect-flash')
var cors = require('cors')

const port = process.env.PORT || 3000

// Init app
const app = express();
//Passport config
require('./config/passport')(passport);
//Middle ware

app.use(session({ secret: "VaritAss", resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(require('connect-flash')());
app.use(function(req,res,next){
  res.locals.messages = require('express-messages')(req,res)
  next()
})
// app.use(expressValidator({
//   errorFormatter :function(param,msg,value){
//       var namespace = param.split('.'),
//       root = namespace.shift(),
//       formParam =root;
//       while(namespace.length){
//           formParam+='['+namespace.shift()+']';
//       }
//       return{
//           param : formParam,
//           msg   : msg,
//           value : value
//       };
//   }
// }))
// Public folder
app.use(express.static('public'))

// Load view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Use passport
app.get('*', function(req,res,next){

  res.locals.user = req.user || null;
  next();
})

// Home page route
app.get("/", function(req, res) {
  res.render("index", {
    menu: "homepage"
  });
});
app.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  res.send('success')
})

// Promotion route
app.get("/promotion", function(req, res) {
  res.render("promotion", {
    menu: 'promotion'
  });
});


// Promotion route
app.get("/pro2", function(req, res) {
  res.render("pro2", {
    menu: 'pro2'
  });
});

// Confirm route
app.get("/confirmOrder", function(req, res) {
  res.render("confirmOrder", {
    menu: 'confirmOrder'
  });
});

// Status route
app.get("/status", function(req, res) {
  res.render("status", {
    menu: 'status'
  });
});

// Sign up route
app.get("/signup", function(req, res) {
  res.render("signup", {
    menu: 'signup'
  });
});


// Log in route
app.get("/login", function(req, res) {
  res.render("login", {
    menu: 'login'
  })
})

//Logout
app.get("/logout",function(req,res){
  req.logout()
  req.flash('success','Logout success')
  res.redirect('/')
})

//aboutUs
app.get("/aboutUs", function(req, res) {
  res.render("aboutUs", {
    menu: 'aboutUs'
  });
});

//search
app.get("/search", function(req, res) {
  res.render("search") 
});

app.use(require('./routes/products'))

app.use('/accounts', require('./routes/accounts'))

app.use('/mycart', require('./routes/cart'))

app.use(require('./routes/admin'))

app.use('/myappointment',require('./routes/appointment'))

app.use(function(req, res, next) {
  return res.status(404).render('404')
});

// Log in server
app.listen(port, function() {
  console.log("server started on port " + port);
});
