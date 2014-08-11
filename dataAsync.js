var http = require('http');
var bl = require('bl');
//var url = process.argv[2];
var collection = [];
var returned = 0;
process.argv.slice(2).forEach(function(url, index) {
	http.get(url, function(response) {
		response.pipe(bl(function(err, data) {
			if (err) console.error(err);
			collection[index] = data.toString(); 
			if (++returned === 3) {
				collection.forEach(function(data) { console.log(data); });
			}
/*			console.log(index);
			console.log(collection);*/
		}));
	});
});

