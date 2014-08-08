var fileList = require('./fileList.js');
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];

fileList(dir, extension, function() {
	fs.readdir(dir, function(err, list) {
		if (!err) {
			list.forEach(function(file) {
				if (path.extname(file) === '.' + extension) {
					console.log(file);
				}
			});
		}
	});	
});

