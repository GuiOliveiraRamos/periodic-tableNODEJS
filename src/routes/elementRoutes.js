const express = require('express');
const { handleElement, handleOff } = require('../controllers/elementController');

const router = express.Router();

router.post('/element/:symbol', handleElement); // Ex: /element/H
router.post('/off', handleOff);

module.exports = router;