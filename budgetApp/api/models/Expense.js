/**
 * Expense.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id: {
  		type: 'integer',
  		autoIncrement: true,
  		required: false
  	},
  	type: {
  		type: 'string',
  		required: true
  	},
  	name: {
  		type: 'string',
  		required: true
  	},
  	price: {
  		type: 'float',
  		required: true
  	},
  	createdAt: {
  		type: 'date',
  		required: false
  	}
  }
};

