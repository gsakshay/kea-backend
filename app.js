var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./users');
const studentRouter = require('./routes/student')
const parentRouter = require('./routes/parent');
const paymentRouter = require('./routes/payment')
const examCenterRouter = require('./routes/examCenter')
const invigilatorRouter = require('./routes/invigilator')
const keaBoardRouter = require('./routes/keaBoard')
const hallTicketRouter = require('./routes/hallTicket')

var app = express();
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter)
app.use('/parent', parentRouter)
app.use('/payment', paymentRouter)
app.use('/exam_center', examCenterRouter)
app.use('/invigilators', invigilatorRouter)
app.use('/kea_board', keaBoardRouter)
app.use('/hall_ticket', hallTicketRouter)


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

module.exports = app;
