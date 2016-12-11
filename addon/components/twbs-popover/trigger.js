import Ember from 'ember';
import layout from '../../templates/components/twbs-popover/trigger';

export default Ember.Component.extend({
  classNames: ['twbs-popover-trigger'],
  layout,
  tagName: 'span',
  _register: Ember.on('didInsertElement', function () {
    if (Ember.isPresent(this.get('register'))) {
      this.get('register')(this.$());
    } else {
      Ember.Logger.warn('The `twbs-popover.trigger` component should have an action assigned to its `register` property.');
    }
  })
});
