const child_process = require('child_process');
const path = require('path');

// router.post('/cmd/music/:action', require('./music'));
module.exports = function*() {
	let action = this.params.action;

	if (action == 'next') {
		child_process.exec(`${path.resolve(__dirname, '../bin')}/musicNext.vbs`, err => err && console.error(err));
	} else if (action == 'last') {
		child_process.exec(`${path.resolve(__dirname, '../bin')}/musicLast.vbs`, err => err && console.error(err));
	} else if (action == "toggle") {
		child_process.exec(`${path.resolve(__dirname, '../bin')}/musicToggle.vbs`, err => err && console.error(err));
	}

	console.info(`music control: ${action}`);

	this.response.status = 200;
}