/**
 * Created by ifcode on 14/08/14.
 */
var http = require('http');
var url = require('url');

function parsetime (time) {
    return { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
}

function unixtime (time) {
    return { unixtime: time.getTime() };
}

var router = {};
router['/api/unixtime'] = unixtime;
router['/api/parsetime'] = parsetime;

var server = http.createServer(function (req, res) {
    'use strict';

    res.writeHead(200, { 'Content-Type': 'application/json' });

    var reqUrl = url.parse(req.url, true);
    var path = url.parse(req.url, true).pathname;

    var time = new Date(reqUrl.query.iso);
    return res.end(JSON.stringify(router[path](time)));
});

server.listen(process.argv[2]);