#Jscrush plugin for Webpack

###Installation:

	var Jscrush = require('webpack-jscrush');

    // ...
    
    // webpack plugins array
	plugins: [
		new UglifyJsPlugin(), // better to use with UglifyJsPlugin
		new Jscrush()
	],
