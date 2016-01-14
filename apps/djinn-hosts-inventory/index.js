var express = require('express'),
    app     = express(),
    path    = require('path'),
    PouchDB = require('pouchdb');

var TempPouchDB = PouchDB.defaults({prefix: path.join(__dirname,'datas')});

app.use('/', express.static('public')); 
app.use('/db', require('express-pouchdb')(TempPouchDB));
 
app.listen(3000);
