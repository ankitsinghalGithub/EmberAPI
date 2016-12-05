import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({
  model(params) {
    var url = 'https://ankitapi.herokuapp.com/wordcountAPI?url='+params.count_id ;
    return RSVP.hash({
      urldata: ([{'url':params.count_id}]),
      data: Ember.$.getJSON(url)
    });
  }
});
