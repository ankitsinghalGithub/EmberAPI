import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	watsonConceptLookup(params) {
      		this.transitionTo('getwatsonConceptResults', params.url);
    	}
  },

  model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/getConceptAPI?url=' + params.url;
   //var url = 'http://localhost:5000/getConceptAPI?url=' + params.url;
   return Ember.$.getJSON(url).then(function(responseJSON) {
    
     return responseJSON;
   });

  }

});
