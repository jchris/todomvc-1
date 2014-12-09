import DS from 'ember-data';
 
var Todo = DS.Model.extend({
  list: DS.belongsTo('list'),
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});
 
export default Todo;
