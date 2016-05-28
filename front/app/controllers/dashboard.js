import Ember from 'ember';

export default Ember.Controller.extend({

  application: Ember.inject.controller(),

  totalNumber: 1, // There is always at least one greener (you)
  totalWater: 0,
  totalElectricty: 0,
  totalCO2: 0,

  schedulePing: function() {

    Ember.run.later((() => {

      let currentUser = this.get('application.model');
      currentUser.set('updatedAt', new Date());

      currentUser.save();
      this.schedulePing();
    }), 1000);

  }.on('init')

});
