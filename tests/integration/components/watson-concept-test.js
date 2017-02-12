import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('watson-concept', 'Integration | Component | watson concept', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{watson-concept}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#watson-concept}}
      template block text
    {{/watson-concept}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
