var Observable = function() {
	this.subs = [];
};

Observable.prototype = {
	// 订阅
	sub: function(callback) {
		if(callback == ""){
			return false;
		}
		this.subs.push(callback);
	},
	// 删除订阅
	unsub: function(callback) {
		var len = this.subs.length;
		for(var i=0; i<len; i++) {
			if(callback === this.subs[i]) {
				this.subs.splice(i,1);
				return ;
			}
		}
	},
	// 发布
	publish: function(msg) {
		var len = this.subs.length;
		// 遍历整个订阅数组，执行每一个回调
		for (var i = 0; i < len; i++) {
			this.subs[i](msg);
			console.log(this.subs[i])
		}
	}
};

// 执行
var Observer = function(msg) {
	console.log(msg);
};

var obs1 = new Observable();
obs1.sub(Observer);
// obs1.unsub(Observer);
obs1.publish("发布内容");