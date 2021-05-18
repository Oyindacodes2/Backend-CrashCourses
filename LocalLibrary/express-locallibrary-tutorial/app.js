var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var wiki = require('./wiki.js');
var mongoDB = 'mongodb+srv://Oyindacodes:damodami42@cluster0.9nfau.mongodb.net/locallibary?retryWrites=true&w=majority';

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/wiki',wiki);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog',catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

                                                  //DATABASE
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));



                                                  //Set up default mongoose connection
/*var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser : true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error',console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});

//Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

//Sample Validation(Schema)

var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min : [6, 'Too few eggs'],
    max: 12,
    required: [true, 'Why no eggs?']
  },
  drink: {
    type: String,
    enum: ['Coffee, Tea','Water']
  }
});

//Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name:'awesome' });

//Save the new model instance, passing a callback
awesome_instance.save((err)=>{
  if(err) return handleError(err);
})
                //OR
SomeModel.create({ name:'also_awesome' }, (err,awesome_instance)=>{
    if(err) return handleError(err);
});

//Searching For records
var Athlete = mongoose.model('Athlete', yourSchema);
var query = Athlete.find({'sport' :'Tennis'});
query.select('name age');
query.limit(5)
query.sort({age: -1});
query.exec((err,athletes)=>{
  if(err) return handleError(err);
})

//Working with related documents — population
var authorSchema = Schema({
  name: String,
  stories: [{type: Schema.Types.ObjectId, ref: 'Story'}]
});

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref:'Author' },
  title: String
});

var Story = mongoose.model('Story',storySchema);
var Author = mongoose.model('Author',authorSchema);

//Creation of References To the related document
var bob =new Author({ name:'Bob Smith' });

bob.save((err)=>{
  if(err) return handleError(err);

  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id
  });

  story.save((err)=>{
    if(err) return handleError(err);
  })
});

//In order to get the author information in the story results
Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //This populates the author id with actual author information!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // prints "The author is Bob Smith"
});
*/




//mongodb+srv://Oyindacodes:<damodami42>@cluster0.8kbn0.mongodb.net/<local_library>?retryWrites=true&w=majority

module.exports = app;
