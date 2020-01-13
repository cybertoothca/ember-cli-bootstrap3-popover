import { find, findAll, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs popover/trigger', function(hooks) {
  setupRenderingTest(hooks);

  test('when registering its html', async function(assert) {
    this.set('register', function(element) {
      assert.equal(element.innerHTML.trim(), '<button>Button</button>', 'The element is passed into the register function.');
    });
    await render(hbs`
  {{#twbs-popover/trigger register=register}}
    <button>Button</button>
  {{/twbs-popover/trigger}}
    `);
  });

  test('the element rendered is a span with the appropriate class', async function(assert) {
    await render(hbs`
      {{#twbs-popover/trigger}}
        The Trigger Span
      {{/twbs-popover/trigger}}
    `);
    assert.equal(findAll('span').length, 1);
    assert.ok(find('span').classList.contains('twbs-popover-trigger'));
  });
});
