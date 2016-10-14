const child_process = require('child_process');
const path = require('path');

// router.post('/cmd/volume/:delta', require('./volume'));
module.exports = function*() {
	let delta = Number(this.params.delta);

	child_process.exec(`${path.resolve(__dirname, '../bin')}/nircmd.exe changesysvolume ${delta}`, err => err && console.error(err));

	console.info(`nircmd.exe changesysvolume ${delta}`);

	this.response.status = 200;
}