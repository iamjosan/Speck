const d3 = require('d3');
const { JSDOM } = require('jsdom');
const { document } = (new JSDOM()).window;

const circle = d3.symbol('circle',25,document.body);

module.exports = circle;