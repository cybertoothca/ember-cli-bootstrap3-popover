import Component from '@ember/component';
import { inject as service } from '@ember/service';
// noinspection JSFileReferences
import layout from '../../templates/components/popover-demo/plain-or-html';

export default Component.extend({
  clock: service(),
  layout,
});
