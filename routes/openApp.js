const child_process = require('child_process');
const appPath = require('../configs/appPath');

// router.post('/cmd/openApp/:appName', require('./openApp'));
module.exports = function*() {
	let appName = this.params.appName;
	if (appPath[appName]) {
		child_process.exec(`"${appPath[appName]}"`, err => err && console.error(err));
		console.log(`openApp: ${appPath[appName]}`)
	} else {
		console.error(`app not found: ${appName}`);
	}

	this.response.status = 200;
}