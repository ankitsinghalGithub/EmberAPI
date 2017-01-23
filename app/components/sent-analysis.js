import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
    sentLookup() {
      var params = {
        sent: this.get('sent')
      };
      this.sendAction('sentLookup', params);
    }
  }


});
