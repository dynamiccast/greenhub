/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    "created-at": {
      columnName: 'cre_dt',
      type: 'datetime',
      defaultsTo: function() {return new Date();}
    },
    "updated-at": {
      columnName: 'upd_dt',
      type: 'datetime',
      defaultsTo: function() {return new Date();}
    }
  },
  //Resonsible for actually updating the 'updateDate' property.
  beforeUpdate:function(values,next) {
    values.updateDate= new Date();
    next();
  }
};
