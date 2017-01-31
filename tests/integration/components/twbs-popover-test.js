import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover', 'Integration | Component | twbs popover', {
  integration: true
});

// TODO: this should be moved into an integration test to capitalize on the andThen helper
test('when manually triggering show', function (assert) {
  this.render(hbs`
    {{#twbs-popover popoverTrigger="manual" title="Popover Title" as |po hide show toggle|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
      <button class="btn-show" {{action show}}>Manual Show</button>
      <button class="btn-hide" {{action hide}}>Manual Hide</button>
    {{/twbs-popover}}
  `);

  assert.equal(this.$('.popover-title').length, 0);

  this.$('.btn-show').click();
  assert.equal(this.$('.popover-title').html(), 'Popover Title');
});

// TODO: this should be moved into an integration test to capitalize on the andThen helper
test('when hooking into the Bootstrap popover events', function (assert) {
  let isShow = false, isShown = false, isHide = false, isHidden = false, isInserted = false;
  this.setProperties({
    onShow: function () {
      isShow = true;
    },
    onShown: function () {
      isShown = true;
    },
    onHide: function () {
      isHide = true;
    },
    onHidden: function () {
      isHidden = true;
    },
    onInserted: function () {
      isInserted = true;
    },
  });

  this.render(hbs`
    {{#twbs-popover title="Popover Title" delay=0 onShow=(action onShow) onShown=(action onShown) onHide=(action onHide) onHidden=(action onHidden) onInserted=(action onInserted) as |po|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
    {{/twbs-popover}}
  `);

  assert.notOk(isShow, 'show.bs.popover HAS NOT YET fired.');
  assert.notOk(isShown, 'shown.bs.popover HAS NOT YET fired.');
  assert.notOk(isHide, 'hide.bs.popover HAS NOT YET fired.');
  assert.notOk(isHidden, 'hidden.bs.popover HAS NOT YET fired.');
  assert.notOk(isInserted, 'hidden.bs.popover HAS NOT YET fired.');

  this.$('.twbs-popover-trigger').click();

  assert.ok(isShow, 'show.bs.popover fired.');
  assert.notOk(isShown, 'shown.bs.popover HAS NOT YET fired.');
  assert.notOk(isHide, 'hide.bs.popover HAS NOT YET fired.');
  assert.notOk(isHidden, 'hidden.bs.popover HAS NOT YET fired.');
  assert.ok(isInserted, 'inserted.bs.popover fired.');
});

test('when clicking the link the popover has the nested `twbs-popover.title`', function (assert) {
  this.render(hbs`
    {{#twbs-popover html?=true as |po|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
      {{#po.title}}<h1>Heading One</h1>{{/po.title}}
    {{/twbs-popover}}
  `);

  this.$('.twbs-popover-trigger').click();
  assert.equal(this.$('.popover-title').html().trim(), '<div class=\"twbs-popover-title\"><h1>Heading One</h1></div>');
});

test('when clicking the link the popover has the property-based `twbs-popover.title`', function (assert) {
  this.render(hbs`
    {{#twbs-popover html?=true title="<h1>Heading One</h1>" as |po|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
    {{/twbs-popover}}
  `);

  this.$('.twbs-popover-trigger').click();
  assert.equal(this.$('.popover-title').html().trim(), '<h1>Heading One</h1>');
});

test('when clicking the link the popover has the nested `twbs-popover.content`', function (assert) {
  this.render(hbs`
    {{#twbs-popover html?=true as |po|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
      {{#po.content}}<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>{{/po.content}}
    {{/twbs-popover}}
  `);

  this.$('.twbs-popover-trigger').click();
  assert.equal(this.$('.popover-content').html().trim(),
    '<div class=\"twbs-popover-content\"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></div>');
});

test('when clicking the link the popover has the property-based `twbs-popover.content`', function (assert) {
  this.render(hbs`
    {{#twbs-popover html?=true content="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>" as |po|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
    {{/twbs-popover}}
  `);

  this.$('.twbs-popover-trigger').click();
  assert.equal(this.$('.popover-content').html().trim(),
    '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>');
});

test('the bootstrap popover is initialized when the trigger is present', function (assert) {
  this.render(hbs`
    {{#twbs-popover as |po|}}
      {{#po.trigger}}Clickable Text{{/po.trigger}}
    {{/twbs-popover}}
  `);
  assert.equal(this.$('.twbs-popover-trigger').attr('data-original-title'), '',
    'Assuming the popover is activated because the `data-original-title` attribute is set');
});

test('has `twbs-popover` class', function (assert) {
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);
  assert.ok(this.$('span').hasClass('twbs-popover'));
});
