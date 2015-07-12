var expect = require('chai').expect
  , client = require('client')
  , shim = !client && polyfill()
  , d3 = global.d3 = require('d3')
  , sall = require('./')

describe('sall', function() {

  before(function(){
    /* istanbul ignore next */
    node = !client
      ? document.body.firstElementChild
      : document.body.appendChild(document.createElement('div'))

    node.innerHTML = '<li class="sall-li"></li><li class="sall-li"><li class="sall-li"></li></li>'
  })

  after(function(){
    node.parentNode.removeChild(node)
  })

  it('should d3 selectAll node', function() {
    expect(sall(node)('.sall-li').size()).to.be.equal(3)
  })

  it('should d3 selectAll from existing selection', function() {
    expect(sall(d3.select(node))('.sall-li').size()).to.be.equal(3)
  })

  it('should d3 selectAll node from no scope', function() {
    expect(sall()('.sall-li').size()).to.be.equal(3)
  })

})

function polyfill(){
  window = require("jsdom").jsdom('<div>').defaultView
  global.document = window.document
  global.querySelectorAll = document.querySelectorAll
}