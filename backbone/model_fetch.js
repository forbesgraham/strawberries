var Todo = Backbone.Model.extend({
	defaults: {
		'title': '',
		'completed' : false
	}
});

var TodosCollection = Backbone.Collection.extend({
	model: Todo,
	url: '/todos'
});

var todos = new TodosCollection();
todos.create({title: 'Boston Riots'});
todos.fetch();

//var todo2 = todos.get(2);
//todo2 = new Todo();
//todo2.set('title', 'Play basketball');
//todo2.save();
