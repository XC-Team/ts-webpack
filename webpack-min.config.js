const generateConfig = require('./webpack.config.js');

let config = {};
config = generateConfig('zen-tools.min');

module.exports = config;