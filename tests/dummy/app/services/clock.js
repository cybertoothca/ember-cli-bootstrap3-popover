import { computed } from '@ember/object';
import Clock from 'ember-cli-clock/services/clock';

export default Clock.extend({
  interval: 1000,
  formattedTime: computed('date', function() {
    return this.get('date').toLocaleTimeString();
  })
});
