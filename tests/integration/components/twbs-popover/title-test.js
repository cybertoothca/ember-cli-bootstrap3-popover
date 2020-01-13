import { findAll, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs popover/title', function(hooks) {
  setupRenderingTest(hooks);

  test('when registering its html', async function(assert) {
    this.set('register', function(html) {
      assert.equal(html.innerHTML.trim(), '<h1>Heading One</h1>', 'The html is passed into the register function.');
    });
    await render(hbs`
  {{#twbs-popover/title register=register}}
    <h1>Heading One</h1>
  {{/twbs-popover/title}}
    `);
  });

  test('the title div-container is hidden', async function(assert) {
    await render(hbs`
  {{#twbs-popover/title}}
    <h1>Heading One</h1>
  {{/twbs-popover/title}}
    `);
    assert.equal(findAll('.hidden').length, 1);
    assert.equal(findAll('.twbs-popover-title').length, 1);
  });
});
