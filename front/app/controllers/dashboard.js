import Ember from 'ember';

export default Ember.Controller.extend({

  application: Ember.inject.controller(),
  boySpeed: 3, // Animation takes 3 seconds by default

  truncate: function(num, places) {
    return Math.trunc(num * Math.pow(10, places)) / Math.pow(10, places);
  },

  totalNumber: 0, // There is always at least one greener (you)
  totalElectricity: function() {
    return this.truncate(this.get('totalNumber') * (346 / 365 / 24), 2);
  }.property('totalNumber'),

  totalCO2: function() {
    return this.truncate(this.get('totalNumber') * (203 / 365 / 24), 2);
  }.property('totalNumber'),

  schedulePing: function() {

    Ember.run.later((() => {

      let currentUser = this.get('application.model');

      currentUser.set('updatedAt', new Date());
      currentUser.save();
      this.schedulePing();

    }), 1000);

  }.on('init'),

  actions: {
    easterEggs: function() {

      this.set('boySpeed', this.get('boySpeed') - 0.2);
      Ember.$(".boy_top").css("animation-duration",  this.get('boySpeed') + "s");
    }
  }

});
