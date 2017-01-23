import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    tweetsSentLookup() {
      var params = {
        keyword: this.get('keyword')
      };
      this.sendAction('tweetsSentLookup', params);
    }
  }

});
