/* This is a test file for the Word class. */
const chai = require('chai');
const expect = chai.expect;

const { Word } = require('../class');

describe('Word', function () {
  let potato;
  this.beforeEach(() => {
    potato = new Word('Potato');
  });

  describe('Word constructor function', function () {
    it('should have a "word" property', function () {
      expect(potato).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(potato.word).to.equal('Potato');
    });
  });

  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function () {
      potato.removeVowels();

      expect(potato.removeVowels()).to.equal('Ptt');
    });
  });

  describe('removeConsonants function', function () {
    it('should return the word with the consonants removed', function () {
      potato.removeConsonants();

      expect(potato.removeConsonants()).to.equal('oao');
    });
  });

  describe('pigLatin function', function () {
    it('should return the word converted to pig latin', function () {
      potato.pigLatin();

      expect(potato.pigLatin()).to.equal('otatoPay');
    });
  });
});
