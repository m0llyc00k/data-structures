{"filter":false,"title":"cheerio.js","tooltip":"/cheerio.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":7,"column":87},"action":"insert","lines":["const cheerio = require('cheerio');","const $ = cheerio.load('<h2 class=\"title\">Hello world</h2>');","","$('h2.title').text('Hello there!');","$('h2').addClass('welcome');","","$.html();","//=> <html><head></head><body><h2 class=\"title welcome\">Hello there!</h2></body></html>"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":87},"action":"remove","lines":["const cheerio = require('cheerio');","const $ = cheerio.load('<h2 class=\"title\">Hello world</h2>');","","$('h2.title').text('Hello there!');","$('h2').addClass('welcome');","","$.html();","//=> <html><head></head><body><h2 class=\"title welcome\">Hello there!</h2></body></html>"],"id":2}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":9},"end":{"row":6,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1631299265155,"hash":"861b32a734c699c15cc74bd8d7abee9dc2d5440f"}