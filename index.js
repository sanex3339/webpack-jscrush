var RawSource = require('webpack-core/lib/RawSource'),
    jscrush = require('jscrush');

function WebpackJSCrush () {}

WebpackJSCrush.prototype.apply = function (compiler) {
    compiler.plugin('compilation', function (compilation) {
        compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
            var files = [];

            chunks.forEach(function(chunk) {

                chunk.files.forEach(function(file) {

                    files.push(file);
                });
            });

            compilation.additionalChunkAssets.forEach(function(file) {
                files.push(file);
            });

            files.forEach(function(file) {
                var asset = compilation.assets[file];
                compilation.assets[file] = new RawSource(jscrush(asset.source()));
            });

            callback();
        });
    });
};

module.exports = WebpackJSCrush;
