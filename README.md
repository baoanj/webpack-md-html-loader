# Webpack loader for markdown file to html string

```bash
$ npm install webpack-md-html-loader -D
```

vue.config.js
```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('md-html')
      .test(/\.md$/)
      .use('md-html')
      .loader('webpack-md-html-loader')
      .end()
  }
}
```