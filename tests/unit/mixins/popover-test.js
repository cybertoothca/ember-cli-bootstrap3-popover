import Ember from 'ember';
// import PopoverMixin from 'ember-cli-bootstrap3-popover/mixins/popover';
import PopoverMixin from 'ember-cli-bootstrap3-popover/mixins/popover';
import { module, test } from 'qunit';

module('Unit | Mixin | popover');

test('when requesting the options hash the defaults are all present', function (assert) {
  let PopoverObject = Ember.Object.extend(PopoverMixin);
  let popover = PopoverObject.create();
  const options = popover.getOptions();
  assert.equal(options.animation, true);
  assert.equal(options.content, '');
  assert.equal(options.delay, 0);
  assert.equal(options.html, false);
  assert.equal(options.placement, 'right');
  assert.equal(options.container, false);
  assert.equal(options.trigger, 'click');
  assert.equal(options.selector, false);
  assert.equal(options.template, '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>');
  assert.equal(options.title, '');
});

test('when requesting the options hash the the popoverContainer shows up under container', function (assert) {
  let PopoverObject = Ember.Object.extend(PopoverMixin);
  let popover = PopoverObject.create({popoverContainer: 'some-container'});
  const options = popover.getOptions();
  assert.equal(options.container, 'some-container');
});

test('when requesting the options hash the the popoverTrigger shows up under trigger', function (assert) {
  let PopoverObject = Ember.Object.extend(PopoverMixin);
  let popover = PopoverObject.create({popoverTrigger: 'focus'});
  const options = popover.getOptions();
  assert.equal(options.trigger, 'focus');
});

// Replace this with your real tests.
test('it works', function (assert) {
  let PopoverObject = Ember.Object.extend(PopoverMixin);
  let subject = PopoverObject.create();
  assert.ok(subject);
});
