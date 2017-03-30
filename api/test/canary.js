'use strict';

//Use this for all tests
const Code             = require('code');
const Lab              = require('lab');
const lab              = exports.lab = Lab.script();
const { describe, it } = lab;
const { expect }       = Code;

describe('a simple test', () => {

  it('returns true when 1 + 1 equals 2', (done) => {

    expect(1 + 1).to.equal(2);
    done();

  });

});
