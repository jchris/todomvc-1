import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
    return this.store.find('list', params.list_id);
		// return this.store.findQuery('todo', params);
	}
});
