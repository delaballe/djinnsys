'use strict';

var path = require('path');

var bunyan = require('bunyan');

var d$ = {};
d$.dir = {};
d$.dir.root = __dirname;
d$.dir.server = path.join(__dirname,"server","default");
d$.dir.datas = path.join(d$.dir.server,"datas");
d$.dir.logs = path.join(d$.dir.server,"logs");
d$.logger = bunyan.createLogger({ name: 'djinnsys',
 streams: [
    {
      level: 'info',
      stream: process.stdout            // log INFO and above to stdout
    },
    {
      level: 'error',
      path: path.join(d$.dir.logs,'djinnsys-error.log')  // log ERROR and above to a file
    }
  ]
});

global.d$ = d$;


var express = require('express');
var app = express();

var djinn_db = require('./apps/djinn-db');

app.use('/', express.static(path.join(__dirname,"browser","public")));
app.use('/mithril', express.static(path.join(__dirname,"apps","mithril-bootstrap","build","public")));
app.use("/db", djinn_db) 

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
