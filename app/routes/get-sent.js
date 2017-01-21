import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    sentLookup(params) {
      this.transitionTo('getSentResults', params.sent);
    }
}

});
