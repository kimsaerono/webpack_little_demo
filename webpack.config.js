var webpack = require('webpack');
module.exports = {
	// 1.写成数组的方式就可以打出多入口文件，不过这里打包后的文件都合成了一个
    // entry: [__dirname + './src/sourceFile.js', __dirname + './src/index.js'],
    // 2.真正实现多入口和多出口需要写成对象的方式
	entry : {
		// 多页面开发，怎么配置页面
		bundle : __dirname + '/src/sourceFile.js',
		bundle1 : __dirname + '/src/index.js',
	},
	// 出口的相关配置
	output : {
		path : __dirname + '/dist',
		filename : '[name].js',
		chunkFilename : '[name].bundle.js',
		publicPath : 'builds/',
	},
	plugins : [
	],
	devServer: {
	    hot: true,
	},

	optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "main",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },

	module : {
		rules : [
		// 此项配置由于eslint报错，还没有找到原因
		// {
   //          test: /\.js/,
   //          use: [
   //          	'eslint-loader'
   //          ],
   //          enforce: 'pre',   // 对应1.x的preLoaders
			// include : /src/,
   //          exclude: /node_modules/,
   //          options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
		 //        "formatter": require('eslint-friendly-formatter') // 指定错误报告的格式规范
		 //    }
        // },
        {
			test : /\.js/,
			use : 'babel-loader',
			include : /src/,
		},
		{
			test : /\.scss/,
			use : ['style-loader','css-loader','sass-loader'],
		},
		{
			test : /\.html/,
			use : 'html-loader'
		}
		]
	},
	resolve: {
	   extensions: ['.js', '.jsx']
	}
}