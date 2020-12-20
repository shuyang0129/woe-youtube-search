/**
 * @name Override Webpack Aliases
 * @description 設定React專案的alias路徑
 * @example
 * 1) 設定Alias
 * 'alias': path.resolve(__dirname, `${paths.appSrc}/`), 路徑從src開始
 * Ex: '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
 * 2) 修改package.json中的script
 * script: {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
  }
 * @see https://github.com/aze3ma/react-app-rewire-aliases
 * @see https://jaketrent.com/post/change-webpack-config-create-react-app-without-ejecting/
 */
const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    '@components': path.resolve(
      __dirname,
      `${paths.appSrc}/components/`
    ),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
    '@api': path.resolve(__dirname, `${paths.appSrc}/api/`),
    '@actions': path.resolve(__dirname, `${paths.appSrc}/actions/`),
    '@constants': path.resolve(
      __dirname,
      `${paths.appSrc}/constants/`
    ),
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
  })(config, env)
  return config
}
