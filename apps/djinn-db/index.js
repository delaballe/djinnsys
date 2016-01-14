'use strict';

var express = require('express'),                                            
    app     = express(),                                                     
    PouchDB = require('pouchdb');                                            

var TempPouchDB = PouchDB.defaults({prefix: d$.dir.datas+"/"});
                                                                             
app.use('/', require('express-pouchdb')(TempPouchDB)); 

module.exports = app;
