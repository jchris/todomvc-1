import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('todos', { path: '/todos/:list_id' }, function() {
  	this.route('active');
  	this.route('completed');
  });
});

export default Router;
