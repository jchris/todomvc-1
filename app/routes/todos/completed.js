import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findQuery('todo', {
      list_id : params.list_id,
      isCompleted : true
    });
  },
  renderTemplate: function(controller) {
	this.render('todos/index', {controller: controller});
  }
});
