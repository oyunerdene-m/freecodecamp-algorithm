function sym(args) {
	var args = Array.from(arguments);
	const res = [];
	for (let i = 0; i < args.length; i++) {
		var mergedArray = [];
		var arrBeforeExclude = Array.prototype.slice.call(args, 0, i);
		var arrAfterExclude = Array.prototype.slice.call(args, i + 1);
		var mergedArray = mergedArray.concat(...arrBeforeExclude, ...arrAfterExclude);
		for (let j = 0; j < args[i].length; j++) {
			if (!mergedArray.includes(args[i][j])) {
				res.push(args[i][j]);
			}
		}
	}
	return res;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
