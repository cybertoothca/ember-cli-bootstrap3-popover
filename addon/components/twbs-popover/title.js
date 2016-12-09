import Ember from 'ember';
import layout from '../../templates/components/twbs-popover/content';

export default Ember.Component.extend({
  classNames: ['hidden', 'twbs-popover-title'],
  layout,
  /**
   * Call the closure action passed to the `registerTitle` property.  Invoking this closure should set the title
   * section of the popover.
   */
  _registerTitle: Ember.on('didInsertElement', function () {
    if (Ember.isPresent(this.get('registerTitle'))) {
      this.get('registerTitle')(this.$().html());
    } else {
      Ember.Logger.warn('The `twbs-popover.title` component should have an action assigned to its `registerTitle` property.');
    }
  })
});
