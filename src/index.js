const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
const $ = require("jquery")(window);

$("<p>hello</p>").appendTo("#root");
