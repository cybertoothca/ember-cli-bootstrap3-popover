import Component from '@ember/component';
import { isPresent } from '@ember/utils';
// noinspection JSFileReferences
import layout from '../../templates/components/twbs-popover/title';

export default Component.extend({
  classNames: ['hidden'],
  layout,
  /**
   * Call the closure action passed to the `registerTitle` property.  Invoking this closure should set the title
   * section of the popover.
   */
  didInsertElement() {
    this._super(arguments);

    if (isPresent(this.register)) {
      this.register(this.element.querySelector('.twbs-popover-title'));
    } else {
      console.warn('The `twbs-popover.title` component should have an action assigned to its `register` property.');
    }
  },
});
