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

  currentIteration: 0,
  stats: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  updateStats: function() {

    let current = this.get('currentIteration');
    this.get('stats')[current] = this.get('totalNumber');

    for (let i = 0; i < 10; i++) {

      if (current === 10) {
	current = 0;
      }

      Ember.$(".bar" + current).children('.grow').css('height', (this.get('stats.' + current) * 10) + "%");
      current++;
    }

  }.observes('currentIteration'),

  schedulePing: function() {

    this.updateStats();
    Ember.run.later((() => {

      let currentUser = this.get('application.model');

      currentUser.set('updatedAt', new Date());
      currentUser.save();
      this.schedulePing();

      var current = this.get('currentIteration');
      if (current === 9) {
	current = 0;
      } else {
	current = current + 1;
      }

      this.set('currentIteration', current);

    }), 1000);

  }.on('init'),

  actions: {
    easterEggs: function() {

      this.set('boySpeed', this.get('boySpeed') - 0.2);
      Ember.$(".boy_top").css("animation-duration",  this.get('boySpeed') + "s");
    }
  }

});
