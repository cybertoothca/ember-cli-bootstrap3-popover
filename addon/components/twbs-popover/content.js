import Component from '@ember/component';
import { isPresent } from '@ember/utils';
// noinspection JSFileReferences
import layout from '../../templates/components/twbs-popover/content';

export default Component.extend({
  classNames: ['hidden'],
  layout,
  /**
   * Call the closure action passed to the `registerContent` property.  Invoking this closure should set the content
   * section of the popover.
   */
  didInsertElement() {
    this._super(arguments);

    if (isPresent(this.register)) {
      this.register(this.element.querySelector('.twbs-popover-content'));
    } else {
      console.warn('The `twbs-popover.content` component should have an action assigned to its `register` property.');
    }
  },
});
