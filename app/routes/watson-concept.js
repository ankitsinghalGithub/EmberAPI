import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    watsonConceptLookup(params) {
      this.transitionTo('getwatsonConceptResults', params.url);
    }
  }

});
