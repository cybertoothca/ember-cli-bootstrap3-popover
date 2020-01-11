import Component from '@ember/component';
import { isPresent } from '@ember/utils';
import Ember from 'ember';
// noinspection JSFileReferences
import layout from '../../templates/components/twbs-popover/trigger';

export default Component.extend({
  classNames: ['twbs-popover-trigger'],
  layout,
  tagName: 'span',
  didInsertElement() {
    this._super(arguments);

    if (isPresent(this.get('register'))) {
      this.get('register')(this.get('element'));
    } else {
      Ember.Logger.warn('The `twbs-popover.trigger` component should have an action assigned to its `register` property.');
    }
  }
});
