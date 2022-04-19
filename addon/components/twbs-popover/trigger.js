import Component from '@ember/component';
import { isPresent } from '@ember/utils';
// noinspection JSFileReferences
import layout from '../../templates/components/twbs-popover/trigger';

export default Component.extend({
  classNames: ['twbs-popover-trigger'],
  layout,
  tagName: 'span',
  didInsertElement() {
    this._super(arguments);

    if (isPresent(this.register)) {
      this.register(this.element);
    } else {
      console.warn('The `twbs-popover.trigger` component should have an action assigned to its `register` property.');
    }
  },
});
