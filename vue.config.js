const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
        config.resolve.extensions.add('ts').add('tsx')
    },
    css: {
        sourceMap: true,
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }

            }
        }
    }
}