import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    tweetsSentLookup(params) {
      this.transitionTo('getTweetsSentResult', params.keyword);
    }
  }

});
