var __DEBUG__ENABLE = true;

function Logger (group) {
	this.group = group;
}

Logger.prototype.log = function (info) {
	if(__DEBUG__ENABLE){
	    var args = Array.prototype.slice.call(arguments);
		args.push('-');
		args.push(this.group);
		console.log.apply(console, args);
	}
}