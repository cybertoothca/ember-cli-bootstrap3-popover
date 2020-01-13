import { click, find, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | twbs popover', function(hooks) {
  setupRenderingTest(hooks);

  // TODO: this should be moved into an integration test to capitalize on the andThen helper
  test('when manually triggering show', async function(assert) {
    await render(hbs`
      {{#twbs-popover popoverTrigger="manual" title="Popover Title" as |po hide show toggle|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
        <button class="btn-show" {{action show}}>Manual Show</button>
        <button class="btn-hide" {{action hide}}>Manual Hide</button>
      {{/twbs-popover}}
    `);

    assert.dom('.popover-title').doesNotExist();

    await click('.btn-show');
    assert.equal(find('.popover-title').innerHTML, 'Popover Title');
  });

  // TODO: this should be moved into an integration test to capitalize on the andThen helper
  test('when hooking into the Bootstrap popover events', async function(assert) {
    let isShow = false, isShown = false, isHide = false, isHidden = false, isInserted = false;
    this.setProperties({
      onShow: function() {
        isShow = true;
      },
      onShown: function() {
        isShown = true;
      },
      onHide: function() {
        isHide = true;
      },
      onHidden: function() {
        isHidden = true;
      },
      onInserted: function() {
        isInserted = true;
      },
    });

    await render(hbs`
      {{#twbs-popover title="Popover Title" delay=0 onShow=(action onShow) onShown=(action onShown) onHide=(action onHide) onHidden=(action onHidden) onInserted=(action onInserted) as |po|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
      {{/twbs-popover}}
    `);

    assert.notOk(isShow, 'show.bs.popover HAS NOT YET fired.');
    assert.notOk(isShown, 'shown.bs.popover HAS NOT YET fired.');
    assert.notOk(isHide, 'hide.bs.popover HAS NOT YET fired.');
    assert.notOk(isHidden, 'hidden.bs.popover HAS NOT YET fired.');
    assert.notOk(isInserted, 'hidden.bs.popover HAS NOT YET fired.');

    await click('.twbs-popover-trigger');

    assert.ok(isShow, 'show.bs.popover fired.');
    assert.notOk(isShown, 'shown.bs.popover HAS NOT YET fired.');
    assert.notOk(isHide, 'hide.bs.popover HAS NOT YET fired.');
    assert.notOk(isHidden, 'hidden.bs.popover HAS NOT YET fired.');
    assert.ok(isInserted, 'inserted.bs.popover fired.');
  });

  test('when clicking the link the popover has the nested `twbs-popover.title`', async function(assert) {
    await render(hbs`
      {{#twbs-popover html?=true as |po|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
        {{#po.title}}<h1>Heading One</h1>{{/po.title}}
      {{/twbs-popover}}
    `);

    await click('.twbs-popover-trigger');
    assert.equal(find('.popover-title').innerHTML.trim(), '<div class="twbs-popover-title"><h1>Heading One</h1></div>');
  });

  test('when clicking the link the popover has the property-based `twbs-popover.title`', async function(assert) {
    await render(hbs`
      {{#twbs-popover html?=true title="<h1>Heading One</h1>" as |po|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
      {{/twbs-popover}}
    `);

    await click('.twbs-popover-trigger');
    assert.equal(find('.popover-title').innerHTML.trim(), '<h1>Heading One</h1>');
  });

  test('when clicking the link the popover has the nested `twbs-popover.content`', async function(assert) {
    await render(hbs`
      {{#twbs-popover html?=true as |po|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
        {{#po.content}}<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>{{/po.content}}
      {{/twbs-popover}}
    `);

    await click('.twbs-popover-trigger');
    assert.equal(find('.popover-content').innerHTML.trim(),
      '<div class="twbs-popover-content"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>');
  });

  test('when clicking the link the popover has the property-based `twbs-popover.content`', async function(assert) {
    await render(hbs`
      {{#twbs-popover html?=true content="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>" as |po|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
      {{/twbs-popover}}
    `);

    await click('.twbs-popover-trigger');
    assert.equal(find('.popover-content').innerHTML.trim(),
      '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>');
  });

  test('the bootstrap popover is initialized when the trigger is present', async function(assert) {
    await render(hbs`
      {{#twbs-popover as |po|}}
        {{#po.trigger}}Clickable Text{{/po.trigger}}
      {{/twbs-popover}}
    `);
    assert.dom('.twbs-popover-trigger').hasAttribute(
      'data-original-title',
      '',
      'Assuming the popover is activated because the `data-original-title` attribute is set'
    );
  });

  test('has `twbs-popover` class', async function(assert) {
    await render(hbs`
      {{#twbs-popover}}
        template block text
      {{/twbs-popover}}
    `);
    assert.dom('span').hasClass('twbs-popover');
  });
});
