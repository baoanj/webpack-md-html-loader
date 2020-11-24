const marked = require('marked')

module.exports = function(content) {
  return 'module.exports = `' + marked(content).replace(/`/g, '\\`') + '`'
}
