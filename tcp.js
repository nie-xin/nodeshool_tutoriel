var net = require('net');
var port = process.argv[2];
var server = net.createServer(function (socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    if (month <= 9) month = '0' + month;
    var day = date.getDate();
    if (day <= 9) day = '0' + day;
    var hour = date.getHours();
    var minutes = date.getMinutes();

    socket.write(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + '\n');
    socket.end();
});

server.listen(port);


/* better solution:

var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
*/
