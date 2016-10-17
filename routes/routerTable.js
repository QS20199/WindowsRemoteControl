const router = require('koa-router')();

router.post('/cmd/shutdown/:second', require('./shutdown'));
router.post('/cmd/volume/:delta', require('./volume'));
router.post('/cmd/music/:action', require('./music'));
router.post('/cmd/openApp/:appName', require('./openApp'));

module.exports = router;