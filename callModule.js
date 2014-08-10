var filterList = require('./module.js');
var dir = process.argv[2];
var ext = process.argv[3];

filterList(dir, ext, function(err, list) {
	if (err) {
		return console.error('Error: ', err);
	}

	list.forEach(function(file) {
		console.log(file);
	});
});