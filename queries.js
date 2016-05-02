
/*
 * queries.js
 */
var QueriesQuery = require(__dirname+'/query.js');

/**
 * Create a new Queries that let users create sub-queries.
 * @return {Queries}
 */
function Queries() { }

/**
 * Create a new QueriesQuery object.
 * @return {QueriesQuery}
 */
Queries.prototype.query = function() {
  return new QueriesQuery();
}

module.exports = Queries;
