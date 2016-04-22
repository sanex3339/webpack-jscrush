#Jscrush plugin for Webpack

###Installation (npm):
    npm install --save webpack-jscrush

###Configuration
    
	var Jscrush = require('webpack-jscrush');

    // ...
    
    // webpack plugins array
	plugins: [
		new UglifyJsPlugin(), // better to use with UglifyJsPlugin
		new Jscrush()
	],
