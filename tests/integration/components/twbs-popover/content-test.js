import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs popover/content', function(hooks) {
  setupRenderingTest(hooks);

  test('when registering its html', async function(assert) {
    this.set('register', function(html) {
      assert.equal(html.innerHTML.trim(), '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>',
        'The html is passed into the register function.');
    });
    await render(hbs`
  {{#twbs-popover/content register=register}}
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  {{/twbs-popover/content}}
    `);
  });

  test('the content div-container is hidden', async function(assert) {
    await render(hbs`
  {{#twbs-popover/content}}
    <h2>Heading Two</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  {{/twbs-popover/content}}
    `);
    assert.ok(this.$('div').hasClass('hidden'));
    assert.ok(this.$('div').hasClass('twbs-popover-content'));
  });
});
