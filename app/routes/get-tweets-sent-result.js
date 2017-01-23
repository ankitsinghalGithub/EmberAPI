import Ember from 'ember';

export default Ember.Route.extend({


	actions: {
    tweetssentLookup(params) {
      this.transitionTo('getTweetsSentResult', params.keyword);
    }
    
  },

  model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/tweetsSentapi?key=' + params.keyword;
   return Ember.$.getJSON(url).then(function(responseJSON) {
    
     return responseJSON.results;
   });

  }


});
