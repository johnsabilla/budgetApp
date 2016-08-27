/**
 * ExpenseController
 *
 * @description :: Server-side logic for managing expenses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

	/**
	 *
	 *
	 *
	 */
	findAll: function(request, result) {
		console.log('hello');
		Expense.find({}).exec(function (error, expenses) {
			if(error) {
				result.send(400);
			}
			else {
				console.log(expenses);
				return result.view('homepage',{"expenses": expenses} );
			}
		});
	},


	/**
	 *
	 *
	 *
	 */
	findById: function(request, result) {
		var id = request.param('id');
		Expense.findOne({ where: { id: id } }).exec(function(error, expenses) {
			if(error) {
				result.send(400);
			}
			else {
				result.send(expenses);
			}
		});
	},


	/**
	 *
	 *
	 *
	 */
	create: function(request, result) {
		var params = request.params.all();
		var newExpense = {
			type: params.type,
			name: params.name,
			price: params.price
		};

		Expense.create(newExpense).exec(function(error, expenses) {
			if(error) {
				result.send(400);
			}
			else {
				result.send(expenses);
			}
		});
	},


	/**
	 *
	 *
	 *
	 */
	update: function(request, result) {
		var params = request.params.all();
		var expenseId = params.id;
		var newExpense = {
			type: params.type,
			name: params.name,
			price: params.price
		};

		Expense.update({ id: expenseId }, newExpense).exec(function(error, expenses) {
		   	if(error) {
		   		result.send(400);
		   	}
		   	else {
		   		result.send(expenses);
		   	}
		});
	},


	/**
	 *
	 *
	 *
	 */
	delete: function(request, result) {
		var expenseId = request.params.id;

		Expense.destroy({ id: expenseId}).exec(function(error) {
			if(error) {
				result.send(400);
			}
			else {
				result.send({ message: 'document '+ expenseId + ' has been deleted.'});
			}
		});
	}

};