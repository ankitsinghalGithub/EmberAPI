import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    sentLookup(params) {
      this.transitionTo('getSentResults', params.sent);
    }

},

model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/sentimentapi?sent=' + params.sent;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });

  }


});
