
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

module.exports.Params = class {
	data = module.exports.getSearchParams();
	constructor() {
		let _this = this;
		let obj = new Proxy(_this, {
			get(target, name, receiver) {
				if (_this[name]) return _this[name]
				return _this.data[name]
			},
			set(target, name, value, receiver) {
				_this.data[name] = value;
				return true
			},
			save() {
				console.log('sdasd');
			}
		});
		return obj
	}

	save() {
		let args = new URLSearchParams(this.data);
		document.location.search = '?' + args.toString()
	}
}
