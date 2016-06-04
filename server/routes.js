const { Router } = require('express');
const { hello } = require('./controllers');

const router = Router();


router.get('/', hello);

module.exports = router;
