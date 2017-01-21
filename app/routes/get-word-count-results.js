import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	wordCountLookup(params) {
      		this.transitionTo('getWordCountResults', params.url);
    	}
  },

  model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/wordcountAPI?url=' + params.url;
   return Ember.$.getJSON(url).then(function(responseJSON) {
    
     return responseJSON;
   });

  }

});
