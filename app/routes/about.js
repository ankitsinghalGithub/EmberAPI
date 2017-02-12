import Ember from 'ember';

export default Ember.Route.extend({
	model() {
    return [['Behaviour', 'Score'], ['HAPPY', 4.3449999999999998], ['ANGER', 1.1400000000000001], ['SAD', 1.1499999999999999], ['FEAR', 1.1749999999999998], ['DISGUST', 1.125]];
  },
});
