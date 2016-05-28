import Ember from 'ember';

export default Ember.Route.extend({

  ALLOWED_IDLE: 5,

  model: function() {
    return this.store.findAll('user')
      .then((users) => {

	var recentUser = [];

	users.forEach((user) => {

	  let time = new Date();
	  time.setSeconds(time.getSeconds() - this.ALLOWED_IDLE);

	  if (user.get('updatedAt') > time) {
	    recentUser.push(user);
	  }
	});

	return recentUser;
      });
  }
});
