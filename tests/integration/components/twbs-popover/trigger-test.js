import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover/trigger', 'Integration | Component | twbs popover/trigger', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{twbs-popover/trigger}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#twbs-popover/trigger}}
      template block text
    {{/twbs-popover/trigger}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
