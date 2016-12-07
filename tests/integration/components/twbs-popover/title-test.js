import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover/title', 'Integration | Component | twbs popover/title', {
  integration: true
});

test('the title div-container is hidden', function (assert) {
  this.render(hbs`
{{#twbs-popover/title}}
  <h1>Heading One</h1>
{{/twbs-popover/title}}
  `);
  assert.ok(this.$('div').hasClass('hidden'));
  assert.ok(this.$('div').hasClass('twbs-popover-title'));
});
