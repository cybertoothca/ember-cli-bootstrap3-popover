import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover/content', 'Integration | Component | twbs popover/content', {
  integration: true
});


test('the content div-container is hidden', function (assert) {
  this.render(hbs`
{{#twbs-popover/content}}
  <h2>Heading Two</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
{{/twbs-popover/content}}
  `);
  assert.ok(this.$('div').hasClass('hidden'));
  assert.ok(this.$('div').hasClass('twbs-popover-content'));
});
