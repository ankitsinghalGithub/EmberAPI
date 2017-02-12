import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('api');
  this.route('getTweets');
  this.route('getTweetsResult',  {path: '/getTweetsResult/:keyword'});
  this.route('getTweetsSent');
  this.route('getTweetsSentResult',  {path: '/getTweetsSentResult/:keyword'});
  this.route('getSent');
  this.route('getSentResults',  {path: '/getSentResults/:sent'});
  this.route('getAttitude');
  this.route('getAttitudeResults',  {path: '/getAttitudeResults/:text'});
  this.route('getWordCount');
  this.route('getWordCountResults',  {path: '/getWordCountResults/:url'});
  this.route('watsonConcept');
  this.route('getwatsonConceptResults',  {path: '/getwatsonConceptResults/:url'});
});

export default Router;
