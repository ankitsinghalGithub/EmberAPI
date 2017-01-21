
import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
    attitudeLookup(params) {
      this.transitionTo('getAttitudeResults', params.text);
    }
}

});
