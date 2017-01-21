import Ember from 'ember';

export default Ember.Component.extend({
	 actions: {
    	nltkLookup() {
      		var params = {
        		url: this.get('url')
      	};
      	
      this.sendAction('nltkLookup', params);
    }
  }

});
