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
    /**
     * Sets the `content` property to the supplied value.  If you are supplying html to the content section, you
     * must make sure that the `html?` property is set to true.
     * @param content the content for the popover.  Can be plain-text or html.
     */
    setPopoverContent(content) {
      this.set('content', content);
    },
    /**
     * Sets the `title` property to the supplied value.  If you are supplying html to the title section, you must make
     * sure that the `html?` property is set to true.
     * @param title the title for the popover.  Can be plain-text or html.
     */
    setPopoverTitle(title) {
      this.set('title', title);
    },
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    show() {
      Ember.Logger.info('SHOWing!!!');
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
