import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findQuery('todo', {
      list_id : params.list_id,
      isCompleted : false
    });
    // return this.store.find('list', params.list_id).then(function(list){
    //   return list.get('todos')
    // })
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});
