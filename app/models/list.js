import DS from 'ember-data';
 
var List = DS.Model.extend({
  todos: DS.hasMany('todo'),
  title: DS.attr('string'),
  isShared: DS.attr('boolean')
});
 
export default List;
