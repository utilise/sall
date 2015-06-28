var sel = require('sel')

module.exports = function sall(scope){
  var parent = scope.node ? scope : sel(scope)
  return function(selector){
    return parent.selectAll(selector)
  }
}