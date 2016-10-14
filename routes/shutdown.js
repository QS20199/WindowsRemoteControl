const child_process = require('child_process');

// router.post('/cmd/shutdown/:second', require('./shutdown'));
module.exports = function*() {
	let secondsBeforeShutown = Number(this.params.second);

	if (secondsBeforeShutown == -1) { //取消关机
		child_process.exec("shutdown -a");
		console.log("power control: shotdown -a")
	} else {
		child_process.exec(`shutdown -s -t ${secondsBeforeShutown}`);
		console.log(`power control: shutdown -s -t ${secondsBeforeShutown}`)
	}

	this.response.status = 200;
}