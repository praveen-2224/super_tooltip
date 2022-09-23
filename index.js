
const moment = require('moment');
const simpleGit = require('simple-git');

const DATE = moment().subtract(8.5, 'months').format();
simpleGit().add("./*").commit("Update clear extra line", {'--date': DATE}).push();