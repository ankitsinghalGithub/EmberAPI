import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pastTweetsLookup() {
      var params = {
        keyword: this.get('keyword')
      };
      this.sendAction('pastTweetsLookup', params);
    }
  }
});