'use strict';

var express = require('express'),                                            
    app     = express(),                                                     
    PouchDB = require('pouchdb');                                            
                                                                             
app.use('/', require('express-pouchdb')(PouchDB)); 

module.exports = app;
