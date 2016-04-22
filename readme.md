#JSCrush plugin for Webpack

###Installation (npm):
    npm install --save webpack-jscrush

###Configuration
    
	var JSCrush = require('webpack-jscrush');

    // ...
    
    // webpack plugins array
	plugins: [
		new UglifyJsPlugin(), // better to use with UglifyJsPlugin
		new JSCrush()
	],
