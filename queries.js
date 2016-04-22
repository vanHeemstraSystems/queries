/*
 * queries.js
 *
 * input: input - an Object
 *
 * output: resolve - a Promise
 */
module.exports = function() {
  console.log('queries - called');
  var _Me = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths'); 
  var promise = require(path.join(paths.libraries, '/promise.js'));
  var _query = require(__dirname+'/query.js'); // change this into a function that returns a Promise
  var join = promise.join;
  return new promise(function(resolve) {
    join(_query(), function(query) {
      _Me.query = query;
    }); // eof join
    console.log('queries - resolve(_Me): ', _Me);
    resolve(_Me);
  }) // eof promise
  .catch(function(error) {
    console.log('queries - error: ', error);
  }) // eof catch
  .finally(function() {
    console.log('queries - finally');
  }); // eof finally
} // eof module