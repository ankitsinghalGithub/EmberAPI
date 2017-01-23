import Ember from 'ember';


export default Ember.Route.extend({

	actions: {
    pastTweetsLookup(params) {
      this.transitionTo('getTweetsResult', params.keyword);
    }
    
  },

  model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/pasttweetsapi?key=' + params.keyword;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });

  }
 


});
