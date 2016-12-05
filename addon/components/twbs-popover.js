import Ember from 'ember';
import Popover from '../mixins/popover';
import layout from '../templates/components/twbs-popover';

/**
 * A simple `<a>` (anchor) element that can be clicked to produce a popover.
 */
export default Ember.Component.extend(Popover, {
  attributeBindings: ['href', 'role', 'tabindex'],
  classNames: ['twbs-popover'],
  /**
   * Using `javascript:void(0)` as this anchor's href so that it behaves like a proper link.
   */
  href: Ember.String.htmlSafe('javascript:void(0)'), // jshint ignore:line
  layout,
  role: 'link',
  tagName: 'a',
  tabindex: undefined,
  _destroyPopover: Ember.on('willDestroyElement', function () {
    this.$().popover('destroy');
  }),
  _initializePopover: Ember.on('didInsertElement', function () {
    this.$().popover(this.getOptions());
  })
});
