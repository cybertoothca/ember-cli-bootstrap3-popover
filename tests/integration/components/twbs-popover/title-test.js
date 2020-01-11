import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover/title', 'Integration | Component | twbs popover/title', {
  integration: true
});

test('when registering its html', function(assert) {
  this.set('register', function(html) {
    assert.equal(html.innerHTML.trim(), '<h1>Heading One</h1>', 'The html is passed into the register function.');
  });
  this.render(hbs`
{{#twbs-popover/title register=register}}
  <h1>Heading One</h1>
{{/twbs-popover/title}}
  `);
});

test('the title div-container is hidden', function(assert) {
  this.render(hbs`
{{#twbs-popover/title}}
  <h1>Heading One</h1>
{{/twbs-popover/title}}
  `);
  assert.ok(this.$('div').hasClass('hidden'));
  assert.ok(this.$('div').hasClass('twbs-popover-title'));
});
