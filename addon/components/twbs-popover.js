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
  tabindex: undefined,
  tagName: 'a',
  _destroyPopover: Ember.on('willDestroyElement', function () {
    this.$().popover('destroy');
  }),
  _initializePopover: Ember.on('didInsertElement', function () {
    const options = this.getOptions();
    if (this.$('.twbs-popover-title').length === 1) {
      Ember.set(options, 'title', this.$('.twbs-popover-title').html());
    }
    if (this.$('.twbs-popover-content').length === 1) {
      Ember.set(options, 'content', this.$('.twbs-popover-content').html());
    }
    this.$().popover(options);
  })
});
