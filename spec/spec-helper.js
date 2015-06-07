'use strict';

var chai = require('chai');
var sinon = require('sinon');
var bridge = require('sinon-chai');

chai.use(bridge);

module.exports = {
  expect: chai.expect,
  sinon: sinon,
  ByteBuffer: require('../')
};

beforeEach(function () {
  this.sandbox = sinon.sandbox.create();
});

afterEach(function () {
  this.sandbox.restore();
});