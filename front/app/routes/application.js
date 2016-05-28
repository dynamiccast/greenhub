import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    let user = this.store.createRecord('user', {
      createdAt: new Date,
      updatedAt: new Date
    });

    user.save();
  }
});
