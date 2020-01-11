import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import Ember from 'ember';
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

    if (isPresent(this.get('register'))) {
      this.get('register')(this.get('element').querySelector('.twbs-popover-title'));
    } else {
      Ember.Logger.warn('The `twbs-popover.title` component should have an action assigned to its `register` property.');
    }
  }
});
