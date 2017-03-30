'use strict';

//Use this for all tests
const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
const { describe, it } = lab;
const { expect } = Code;

const User = require('../../lib/models/user');

describe('user model', () => {

  it('should get all users', (done) => {

    User.find().then((users) => {

      expect(users.length).to.not.equal(0);
      done();
    });
  });
});
