import Ember from 'ember';
import Popover from '../mixins/popover';
import layout from '../templates/components/twbs-popover';

/**
 * A simple `<a>` (anchor) element that can be clicked to produce a popover.
 */
export default Ember.Component.extend(Popover, {
  actions: {
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    hide() {
      this.$().popover('hide');
    },
    setPopoverContent() {
      this.set('content', this.$('.twbs-popover-content').html());
    },
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    show() {
      this.$().popover('show');
    },
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    toggle() {
      this.$().popover('toggle');
    }
  },
  attributeBindings: ['href', 'role', 'tabindex'],
  classNames: ['twbs-popover'],
  layout,
  tagName: 'span',
  _destroyPopover: Ember.on('willDestroyElement', function () {
    // this.$().popover('destroy');
  }),
  _initializePopover: Ember.on('didInsertElement', function () {
    const options = this.getOptions();
    // if (this.$('.twbs-popover-title').length === 1) {
    //   Ember.set(options, 'title', this.$('.twbs-popover-title').html());
    // }
    // if (this.$('.twbs-popover-content').length === 1) {
    //   Ember.set(options, 'content', this.$('.twbs-popover-content').html());
    // }
    this.$('.twbs-popover-trigger').popover(options);
  })
});
