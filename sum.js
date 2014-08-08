//console.log('cli arguments:' + process.argv.slice(2));

var sum = process.argv.slice(2).reduce(function(pre, cur) {
	return Number(pre) + Number(cur);
});

console.log(sum);