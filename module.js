var fs = require('fs');
var path = require('path');

module.exports = function(dir, extension, callback) {
	fs.readdir(dir, function(err, list) {
		if (err) {
			return callback(err);
		}

		var data = list.filter(function(el) {
			return path.extname(el).slice(1) === extension;
		});
		callback(null, data);
	})
};
