import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nltk-engine', 'Integration | Component | nltk engine', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nltk-engine}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nltk-engine}}
      template block text
    {{/nltk-engine}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
