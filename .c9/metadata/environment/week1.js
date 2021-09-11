{"changed":true,"filter":false,"title":"week1.js","tooltip":"/week1.js","value":"// npm install got\n// mkdir data\n\nconst fs = require('fs');\nconst got = require('got');\n\n(async () => {\n\ttry {\n\t\tconst response = await got('https://parsons.nyc/thesis-2021/');\n\t\tconsole.log(response.body);\n\t\tfs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', response.body);\n\t\t//=> '<!doctype html> ...'\n\t} catch (error) {\n\t\tconsole.log(error.response.body);\n\t\t//=> 'Internal server error ...'\n\t}\n})();","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":5},"action":"insert","lines":["// npm install got","// mkdir data","","const fs = require('fs');","const got = require('got');","","(async () => {","\ttry {","\t\tconst response = await got('https://parsons.nyc/thesis-2021/');","\t\tconsole.log(response.body);","\t\tfs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', response.body);","\t\t//=> '<!doctype html> ...'","\t} catch (error) {","\t\tconsole.log(error.response.body);","\t\t//=> 'Internal server error ...'","\t}","})();"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":5},"end":{"row":16,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1630521257479}