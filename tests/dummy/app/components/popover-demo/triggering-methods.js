import Component from '@ember/component';
// noinspection JSFileReferences
import layout from '../../templates/components/popover-demo/triggering-methods';

export default Component.extend({
  actions: {
    onShow() {
      this.$('.label-show').addClass('label-success');
      setTimeout(function () {
        this.$('.label-show').removeClass('label-success');
      }, 2500);
    },
    onShown() {
      this.$('.label-shown').addClass('label-success');
      setTimeout(function () {
        this.$('.label-shown').removeClass('label-success');
      }, 2500);
    },
    onHide() {
      this.$('.label-hide').addClass('label-success');
      setTimeout(function () {
        this.$('.label-hide').removeClass('label-success');
      }, 2500);
    },
    onHidden() {
      this.$('.label-hidden').addClass('label-success');
      setTimeout(function () {
        this.$('.label-hidden').removeClass('label-success');
      }, 2500);
    },
    onInserted() {
      this.$('.label-inserted').addClass('label-success');
      setTimeout(function () {
        this.$('.label-inserted').removeClass('label-success');
      }, 2500);
    },
  },
  layout,
});
