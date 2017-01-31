import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover/content', 'Integration | Component | twbs popover/content', {
  integration: true
});

test('when registering its html', function (assert) {
  this.set('register', function ($html) {
    assert.equal($html.html().trim(), '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
      'The html is passed into the register function.');
  });
  this.render(hbs`
{{#twbs-popover/content register=register}}
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
{{/twbs-popover/content}}
  `);
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
