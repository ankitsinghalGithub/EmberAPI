import Ember from 'ember';

export default Ember.Component.extend({
	 actions: {
    	watsonConceptLookup() {
      		var params = {
        		url: this.get('url')
      	};
      	
      this.sendAction('watsonConceptLookup', params);
    }
  }

});
