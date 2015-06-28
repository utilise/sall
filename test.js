var expect = require('chai').expect
  , d3 = global.d3 = require('d3')
  , client = require('client')
  , shim = !client && polyfill()
  , sall = require('./')

describe('sel', function() {

  before(function(){
    /* istanbul ignore next */
    node = !client
      ? document.body.firstElementChild
      : document.body.appendChild(document.createElement('div'))

    node.innerHTML = '<li></li><li><li></li></li>'
  })

  after(function(){
    node.parentNode.removeChild(node)
  })

  it('should d3 selectAll node', function() {
    expect(sall(node)('li').size()).to.be.equal(3)
  })

  it('should d3 selectAll from existing selection', function() {
    expect(sall(d3.select(node))('li').size()).to.be.equal(3)
  })

})

function polyfill(){
  window = require("jsdom").jsdom('<div>').defaultView
  global.document = window.document
}