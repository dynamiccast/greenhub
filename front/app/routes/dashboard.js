import Ember from 'ember';

export default Ember.Route.extend({

  ALLOWED_IDLE: 5,
  REFRESH_INTERVAL: 1000, // Every one second

  scheduleRefresh: function() {

    setTimeout(() => {
      this.refresh();
    }, this.REFRESH_INTERVAL);

  },

  schedulePing: function() {

    Ember.run.later((() => {
      this.schedulePing();
    }), this.REFRESH_INTERVAL);

  }.on('init'),

  model: function() {
    return this.store.findAll('user')
      .then((users) => {

	var userNumber = 1;

	users.forEach((user) => {

	  let time = new Date();
	  time.setSeconds(time.getSeconds() - this.ALLOWED_IDLE);

	  if (user.get('updatedAt') > time) {
	    userNumber = userNumber + 1;
	  }
	});

	this.scheduleRefresh();
	this.controllerFor('dashboard').set('totalNumber', userNumber);
	return users;
      });
  }
});
