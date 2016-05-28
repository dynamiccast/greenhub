import Ember from 'ember';

export default Ember.Controller.extend({

  totalNumber: 1, // There is always at least one greener (you)
  totalWater: 0,
  totalElectricty: 0,
  totalCO2: 0
});
