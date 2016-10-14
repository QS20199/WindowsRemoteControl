const router = require('koa-router')();

router.post('/cmd/shutdown/:second', require('./shutdown'));
router.post('/cmd/volume/:delta', require('./volume'));
router.post('/cmd/music/:action', require('./music'));

module.exports = router;