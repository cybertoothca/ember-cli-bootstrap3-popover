import Ember from 'ember';
import layout from '../../templates/components/twbs-popover/content';

export default Ember.Component.extend({
  classNames: ['hidden', 'twbs-popover-content'],
  layout,
  /**
   * Call the closure action passed to the `registerContent` property.  Invoking this closure should set the content
   * section of the popover.
   */
  _register: Ember.on('didInsertElement', function () {
    if (Ember.isPresent(this.get('register'))) {
      this.get('register')(this.$().html());
    } else {
      Ember.Logger.warn('The `twbs-popover.content` component should have an action assigned to its `register` property.');
    }
  })
});
