var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function(err, list) {
	if (!err) {
		list.filter(function(el) {
			//console.log('extname ' + extension);
			//console.log(path.extname(el));
			return path.extname(el).slice(1) === extension;
		}).forEach(function(el) {
			console.log(el);
		});
	}
});
