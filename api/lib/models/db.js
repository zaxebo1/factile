'use strict';

const MongoClient = require('mongodb').MongoClient;
const Bluebird = require('bluebird');
const Config = require('config');

// Connection URL
const URL = Config.get('db.url').trim();

class DB {

  /**
   * inits a db instance
   *
   * @param {object} collectionName "table" name
   */
  constructor(collectionName) {

    this.collectionName = collectionName;
  }

  /**
   * Opens a connection to the database
   */
  connect() {

    return Bluebird.promisify(MongoClient.connect)(URL);
  };

  /**
   * closes a connection to the database and returns the result as passed
   *
   * @param {object} db database connection object
   * @param {object} result to be passed through
   */
  close(db, result) {

    db.close();
    return result;
  };

  /**
   * Gets data from the given collection after applying the given filters
   *
   * @param {object} filters query filters
   */
  where(filters = {}) {

    return this.connect().then((db) => {

      const collection = db.collection(this.collectionName);
      const finder = collection.find(filters);
      const find = Bluebird.promisify(finder.toArray, { context: finder });
      return find().then((result) => this.close(db, result));
    });
  };

  /**
   * Gets all data from the given collection
   */
  all() {

    return this.where();
  }

  /**
   * Inserts data into the given collection
   *
   * @param {array} items to be inserted
   */
  insert(items) {

    return this.connect().then((db) => {

      const collection = db.collection(this.collectionName);
      const insertMany = Bluebird.promisify(collection.insertMany, { context: collection });
      return insertMany(items).then((result) => this.close(db, result));
    });
  };

  /**
   * Updates data in the given collection after applying the given filters for ony ONE record
   *
   * @param {object} filters query filters
   * @param {object} data to be updated
   */
  update(filters, data) {

    return this.connect().then((db) => {

      const collection = db.collection(this.collectionName);
      const updateOne = Bluebird.promisify(collection.updateOne, { context: collection });
      return updateOne(filters, { $set: data }).then((result) => this.close(db, result));
    });
  };

  /**
   * Deletes a record from the given collection after applying the given filters
   *
   * @param {object} filters query filters
   */
  del(filters) {

    return this.connect().then((db) => {

      const collection = db.collection(this.collectionName);
      const deleteOne = Bluebird.promisify(collection.deleteOne, { context: collection });
      return deleteOne(filters).then((result) => this.close(db, result));
    });
  };
}

module.exports = (collectionName) => new DB(collectionName);
