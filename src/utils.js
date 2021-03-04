
module.exports.getVar = function getVar(obj, path, def) {
	if (typeof path === 'string') {
		path = path.split('.');
	}

	let o = obj;
	let p = 0;
	while(path[p] !== undefined && typeof o[path[p]] === 'object') {
		o = o[path[p]]
		p++;
	}

	return o[path[p]] === undefined ? def : o[path[p]]
}

module.exports.getSearchParams = function getSearchParams() {
	let args = new URLSearchParams(document.location.search);
	return Object.fromEntries(args);
}
