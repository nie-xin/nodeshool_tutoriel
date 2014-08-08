/*fs.readdir(dir, function(err, list) {
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
*/
// better solution:
module.exports  = function(dir, extension, callback);