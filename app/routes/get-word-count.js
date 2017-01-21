import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    nltkLookup(params) {
      this.transitionTo('getWordCountResults', params.url);
    }
  }

});
