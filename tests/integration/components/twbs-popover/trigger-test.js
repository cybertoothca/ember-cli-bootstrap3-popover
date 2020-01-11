import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover/trigger', 'Integration | Component | twbs popover/trigger', {
  integration: true
});

test('when registering its html', function(assert) {
  this.set('register', function(element) {
    assert.equal(element.innerHTML.trim(), '<button>Button</button>', 'The element is passed into the register function.');
  });
  this.render(hbs`
{{#twbs-popover/trigger register=register}}
  <button>Button</button>
{{/twbs-popover/trigger}}
  `);
});

test('the element rendered is a span with the appropriate class', function(assert) {
  this.render(hbs`
    {{#twbs-popover/trigger}}
      The Trigger Span
    {{/twbs-popover/trigger}}
  `);
  assert.equal(this.$('span').length, 1);
  assert.ok(this.$('span').hasClass('twbs-popover-trigger'));
});
