import Ember from 'ember';
import layout from '../../templates/components/twbs-popover/title';

export default Ember.Component.extend({
  classNames: ['hidden'],
  layout,
  /**
   * Call the closure action passed to the `registerTitle` property.  Invoking this closure should set the title
   * section of the popover.
   */
  _register: Ember.on('didInsertElement', function () {
    if (Ember.isPresent(this.get('register'))) {
      this.get('register')(this.$('.twbs-popover-title'));
    } else {
      Ember.Logger.warn('The `twbs-popover.title` component should have an action assigned to its `register` property.');
    }
  })
});
