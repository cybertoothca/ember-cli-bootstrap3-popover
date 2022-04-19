# ember-cli-bootstrap3-popover

[![npm version](http://badge.fury.io/js/ember-cli-bootstrap3-popover.svg)](http://badge.fury.io/js/ember-cli-bootstrap3-popover) ![downloads](https://img.shields.io/npm/dy/ember-cli-bootstrap3-popover.svg) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-popover/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-popover)

[![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-popover.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-popover)

This addon allows you to quickly and conveniently create a [Bootstrap3 Popover](https://getbootstrap.com/docs/3.3/javascript/#popovers).

## Compatibility

- Ember.js v2.18 or above
- Ember CLI v2.13 or above
- Node.js v8 or above
- Bootstrap 3.3.x+

## Installation

The following will install this addon:

```
ember install ember-cli-bootstrap3-popover
```

## Demo

The demonstration web application can be found here:
[http://ember-cli-bootstrap3-popover.cybertooth.io/](http://ember-cli-bootstrap3-popover.cybertooth.io/).

## Usage

As mentioned above there are dozens of examples on the demonstration site:
[http://ember-cli-bootstrap3-popover.cybertooth.io/](http://ember-cli-bootstrap3-popover.cybertooth.io/)

### What Does This Addon Do?

This addon supplies the following _components_:

- `twbs-popover` - a container-like element for the popover's markup, options, methods, and events.
- `twbs-popover/content` - a component you nest inside a `twbs-popover` that will generate
  the _content_ for the popover.
- `twbs-popover/title` - a component you nest inside a `twbs-popover` that will generate
  the _title_ for the popover.
- `twbs-popover/trigger` - the component you nest inside a `twbs-popover` that acts as the bound element for the
  popover and in normal trigger events will accept clicks, hovering, and focus events to toggle the popover.

The following _mixin_ also ships with this addon:

- `Popover` - imported as `import Popover as 'ember-cli-bootstrap3-popover/mixins/popover'` and includes all of the
  popover options as found in the [Bootstrap documentation](https://getbootstrap.com/docs/3.3/javascript/#popovers-options).

### Components

#### `{{twbs-popover}}`

A component that contains all of the markup associated with the popover. You can nest `{{twbs-popover.content}}`,
`{{twbs-popover.title}}`, and `{{twbs-popover.trigger}}` inside this components block.

The reason this addon requires **Ember-2.3.0+** is because this particular component uses the _hash_ helper.

**Be aware that when you nest either the content or title it will be automatically treated as html.**

##### Arguments

- _All of the properties listed in the `Popover` mixin_.
- `onShow` - the property that accepts an action closure hooked to the bootstrap `show.bs.popover` event.
- `onShown` - the property that accepts an action closure hooked to the bootstrap `shown.bs.popover` event.
- `onHide` - the property that accepts an action closure hooked to the bootstrap `hide.bs.popover` event.
- `onHidden` - the property that accepts an action closure hooked to the bootstrap `hidden.bs.popover` event.
- `onInserted` - the property that accepts an action closure hooked to the bootstrap `inserted.bs.popover` event.

([Check out the demo...](http://ember-cli-bootstrap3-popover.cybertooth.io/))

##### Actions

The following popover methods are exposed as actions:

- `hide` - triggers the hiding of a popover.
- `show` - triggers the showing of a popover.
- `toggle` - toggles a popover.

#### `{{twbs-popover/content}}`

A component that nests inside of a `{{#twbs-popover}}` and generates the content for a popover via its block.
This component promotes the easy re-use of existing components inside the popover content and encourages readable html.

##### Arguments

- _None_.

#### `{{twbs-popover/title}}`

A component that nests inside of a `{{#twbs-popover}}` and generates the title for a popover via its block.
This component promotes the easy re-use of existing components inside the popover title and encourages readable html.

##### Arguments

- _None_.

#### `{{twbs-popover/trigger}}`

A component that nests inside of a `{{#twbs-popover}}` and generates the html element that the popover is bound to.
When the popover is initialized, the markup inside this component becomes the popover.

Seriously, check out the examples and all of this will make sense:
[http://ember-cli-bootstrap3-popover.cybertooth.io/](http://ember-cli-bootstrap3-popover.cybertooth.io/)

##### Arguments

- _None_.

### Mixins

#### `Popover`

A mixin that provides access to all of the Bootstrap popover options as found
here: [http://getbootstrap.com/javascript/#popovers-options](https://getbootstrap.com/docs/3.3/javascript/#popovers-options)

##### Properties

- `animation?` (aliased to `animation`)- **Default** `true`
- `content` - **Default** `''`
- `delay` - **Default** `0`
- `delayHide` - **Default** `undefined`
- `delayShow` - **Default** `undefined`
- `html?` (aliased to `html`) - **Default** `false`
- `placement` - **Default** `'right'`
- `popoverContainer` - **Default** `false`
- `popoverTemplate` - **Default** `'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'`
- `popoverTrigger` - **Default** `'click'`
- `selector` - **Default** `false`
- `title` - **Default** `''`

##### Methods

- `getOptions()` - returns a hash containing the options from this mixin
  that are used to initialize the Bootstrap popover.

### Troubleshooting And Tips

1. Ember-2.3.0+ is required because this addon uses the _hash_ helper.
1. Bootstrap3 CSS and the tooltip Javascript plugin must be installed.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
