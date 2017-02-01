import Ember from 'ember';
import PopoverMixin from 'ember-cli-bootstrap3-popover/mixins/popover';
import { module, test } from 'qunit';

module('Unit | Mixin | popover');

test('when requesting the options hash the defaults are all present', function (assert) {
  let PopoverObject = Ember.Object.extend(PopoverMixin);
  let popover = PopoverObject.create();
  const options = popover.getOptions();
  assert.equal(options.animation, true);
  assert.equal(options.content, '');
  assert.equal(options.delay.hide, 0);
  assert.equal(options.delay.show, 0);
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

test('when the delay value is set both show and hide are the same', function (assert) {
  const popoverMixin = Ember.Object.extend(PopoverMixin).create({delay: 500});
  assert.equal(popoverMixin.get('_delayComputed.hide'), 500);
  assert.equal(popoverMixin.get('_delayComputed.show'), 500);
});

test('when only the delay-show value is set ', function (assert) {
  const popoverMixin = Ember.Object.extend(PopoverMixin).create({delayShow: 500});
  assert.equal(popoverMixin.get('_delayComputed.hide'), 0);
  assert.equal(popoverMixin.get('_delayComputed.show'), 500);
});

test('when only the delay-hide value is set ', function (assert) {
  const popoverMixin = Ember.Object.extend(PopoverMixin).create({delayHide: 500});
  assert.equal(popoverMixin.get('_delayComputed.hide'), 500);
  assert.equal(popoverMixin.get('_delayComputed.show'), 0);
});
