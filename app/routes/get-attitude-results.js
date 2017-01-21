import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
    attitudeLookup(params) {
      this.transitionTo('getAttitudeResults', params.text);
    }

},

model: function(params) {
   var url = 'https://artadysapi.herokuapp.com/getAttitudeAPI?text=' + params.text;
   return Ember.$.getJSON(url).then(function(responseJSON) {
   	
     return responseJSON.results;
   });

  }


});
