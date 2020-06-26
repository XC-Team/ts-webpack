const 
  {resolve} = require('./build/utils'),
  isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  entry: {
    // 'babel-polyfill', 
    main: [resolve('src/lib/math.ts')]
  },
}

const devConfig = {
  ...baseConfig,
}

const prodConfig = {
  ...baseConfig
}

module.exports = isProd ? prodConfig : devConfig