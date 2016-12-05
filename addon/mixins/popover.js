import Ember from 'ember';

/**
 * Supporting the basic (and fundamental) attributes of the Bootstrap popover.
 * @see http://getbootstrap.com/javascript/#popovers
 */
export default Ember.Mixin.create({
  /**
   * Apply a CSS fade transition to the popover.
   */
  animation: Ember.computed.alias('animation?'),
  'animation?': true,
  /**
   * Default content value if data-content attribute isn't present.
   *
   * If a function is given, it will be called with its this reference set to the element that the popover is attached
   * to.
   */
  content: '',
  /**
   * Delay showing and hiding the popover (ms) - does not apply to manual trigger type.
   *
   * If a number is supplied, delay is applied to both hide/show.
   *
   * Object structure is: `delay: { "show": 500, "hide": 100 }`.
   */
  delay: 0,
  /**
   * Insert HTML into the popover. If false, jQuery's text method will be used to insert content into
   * the DOM. Use text if you're worried about XSS attacks.
   */
  html: Ember.computed.alias('html?'),
  'html?': false,
  /**
   * How to position the popover - top | bottom | left | right | auto.
   *
   * When "auto" is specified, it will dynamically reorient the popover. For example, if placement is "auto left",
   * the popover will display to the left when possible, otherwise it will display right.
   *
   * When a function is used to determine the placement, it is called with the popover DOM node as its first
   * argument and the triggering element DOM node as its second. The this context is set to the popover instance.
   */
  placement: 'right',
  /**
   * RENAMED `container` to `popoverContainer` to avoid naming conflicts.
   * Appends the popover to a specific element. Example: container: 'body'. This option is particularly useful in
   * that it allows you to position the popover in the flow of the document near the triggering element - which
   * will prevent the popover from floating away from the triggering element during a window resize.
   */
  popoverContainer: false,
  /**
   * RENAMED `trigger` to `popoverTrigger` to avoid naming conflicts.
   * How popover is triggered - click | hover | focus | manual. You may pass multiple triggers; separate
   * them with a space. manual cannot be combined with any other trigger.
   */
  popoverTrigger: 'click',
  /**
   * If a selector is provided, popover objects will be delegated to the specified targets. In practice, this
   * is used to enable dynamic HTML content to have popovers added. See this and an informative example.
   */
  selector: false,
  /**
   * Base HTML to use when creating the popover.
   *
   * The popover's title will be injected into the .popover-title.
   *
   * The popover's content will be injected into the .popover-content.
   *
   * .arrow will become the popover's arrow.
   *
   * The outermost wrapper element should have the .popover class.
   */
  // template: Ember.String.htmlSafe('<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'),
  template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
  /**
   * Default title value if title attribute isn't present.
   * If a function is given, it will be called with its this reference set to the element that the popover
   * is attached to.
   */
  title: '',
  /**
   * Return a hash of all the options that can easily be passed into the popover initialization.
   * @returns {*|Object}
   */
  getOptions() {
    const hash =
      this.getProperties('animation', 'content', 'delay', 'html', 'placement', 'selector', 'template', 'title');
    hash.container = this.get('popoverContainer');
    hash.trigger = this.get('popoverTrigger');
    return hash;
  }
});
