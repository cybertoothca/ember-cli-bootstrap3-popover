import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import $ from 'jquery';
import Popover from '../mixins/popover';
// noinspection JSFileReferences
import layout from '../templates/components/twbs-popover';

/**
 * A simple `<a>` (anchor) element that can be clicked to produce a popover.
 */
export default Component.extend(Popover, {
  actions: {
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    hide() {
      this.get('_$triggerElement').popover('hide');
    },
    /**
     * Sets the `content` property to the supplied value and the `html?` property to `true`.
     * @param content the content for the popover.  Will be rendered as html.
     */
    setPopoverContent(content) {
      this.set('html?', true);
      this.set('content', content);
    },
    /**
     * Sets the `title` property to the supplied value and the `html?` property to `true`.
     * @param title the title for the popover.  Will be rendered as html.
     */
    setPopoverTitle(title) {
      this.set('html?', true);
      this.set('title', title);
    },
    /**
     *
     * @param htmlElement
     */
    setTriggerElement(htmlElement) {
      this.set('_$triggerElement', $(htmlElement)); // TODO: using jQuery
    },
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    show() {
      this.get('_$triggerElement').popover('show');
    },
    /**
     * @see http://getbootstrap.com/javascript/#popovers-methods
     */
    toggle() {
      this.get('_$triggerElement').popover('toggle');
    }
  },
  classNames: ['twbs-popover'],
  layout,
  tagName: 'span',
  didInsertElement() {
    this._super(arguments);

    const options = this.getOptions();
    if (isPresent(this.get('_$triggerElement'))) {
      this.get('_$triggerElement')
        .popover(options)
        .on('show.bs.popover', this.get('onShow'))
        .on('shown.bs.popover', this.get('onShown'))
        .on('hide.bs.popover', this.get('onHide'))
        .on('hidden.bs.popover', this.get('onHidden'))
        .on('inserted.bs.popover', this.get('onInserted'));
    } else {
      console.warn('The `twbs-popover` component expects to have a `twbs-popover.trigger` element registered with it.  Check out the demo application at http://ember-cli-bootstrap3-popover.cybertooth.io/')
    }
  },
  willDestroyElement() {
    this._super(arguments);

    if (isPresent(this.get('_$triggerElement'))) {
      this.get('_$triggerElement').popover('destroy');
    }
  },
  /**
   * The element that the `popover` is attached to.  Usually a link or a button.
   * This is set via the `setTriggerElement` action above.
   */
  _$triggerElement: undefined
});
