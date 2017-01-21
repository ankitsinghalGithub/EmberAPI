import Ember from 'ember';
import RSVP from 'rsvp';


export default Ember.Route.extend({  
    actions: {
        pasttweets:  function(stuff) {
               	alert(stuff);
                var url = 'https://artadysapi.herokuapp.com/pasttweetsapi?key='+stuff;
                alert(url);
                return Ember.$.getJSON(url).then(function(responseJSON) {
     				return responseJSON;
   				});


        }
    }
});
