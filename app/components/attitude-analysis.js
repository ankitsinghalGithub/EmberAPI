import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    attitudeLookup() {
      var params = {
        text: this.get('text')
      };
      
      this.sendAction('attitudeLookup', params);
    }
  }

});
