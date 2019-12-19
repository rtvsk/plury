'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
    it('should return Boys', () => {
        var result = index.getPlural('Boy');
        expect(result).to.equal('Boys');
    });
    it('should return Girls', () => {
        var result = index.getPlural('Girl');
        expect(result).to.equal('Girls');
    });
    it('should return Geese', () => {
        var result = index.getPlural('Goose');
        expect(result).to.equal('Geese');
    });
    it('should return Toys', () => {
        var result = index.getPlural('Toy');
        expect(result).to.equal('Toys');
    });
    it('should return Men', () => {
        var result = index.getPlural('Man');
        expect(result).to.equal('Men');
    });
});

describe('getSingular function test', () => {
  it('should return Boy', () => {
      var result = index.getSingular('Boys');
      expect(result).to.equal('Boy');
  });
  it('should return Girl', () => {
      var result = index.getSingular('Girls');
      expect(result).to.equal('Girl');
  });
  it('should return Goose', () => {
      var result = index.getSingular('Geese');
      expect(result).to.equal('Goose');
  });
  it('should return Toy', () => {
      var result = index.getSingular('Toys');
      expect(result).to.equal('Toy');
  });
  it('should return Man', () => {
      var result = index.getSingular('Men');
      expect(result).to.equal('Man');
  });
});