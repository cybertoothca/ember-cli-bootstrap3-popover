# ember-cli-bootstrap3-popover [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-popover.svg)](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-popover) ![](http://embadge.io/v1/badge.svg?start=2.3.0)

[![npm version](http://badge.fury.io/js/ember-cli-bootstrap3-popover.svg)](http://badge.fury.io/js/ember-cli-bootstrap3-popover) ![downloads](https://img.shields.io/npm/dy/ember-cli-bootstrap3-popover.svg) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-popover/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-popover) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-bootstrap3-popover.svg) [![ember observer](http://emberobserver.com/badges/ember-cli-bootstrap3-popover.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-popover) [![License](http://img.shields.io/npm/l/ember-cli-bootstrap3-popover.svg)](LICENSE.md)

This addon allows you to quickly and conveniently create a [Bootstrap3 Popover](http://getbootstrap.com/javascript/#popovers).

## Tested Against

[![ember-lts-2.4](https://img.shields.io/badge/ember--try-ember--lts--2.4-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover)
[![ember-lts-2.8](https://img.shields.io/badge/ember--try-ember--lts--2.8-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover)
[![ember-lts-2.12](https://img.shields.io/badge/ember--try-ember--lts--2.12-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover)

[![ember-release](https://img.shields.io/badge/ember--try-ember--release-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover)
[![ember-beta](https://img.shields.io/badge/ember--try-ember--beta-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover)
[![ember-canary](https://img.shields.io/badge/ember--try-ember--canary-brightgreen.svg)](https://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover)

## Demo

The demonstration web application can be found here:
[http://ember-cli-bootstrap3-popover.cybertooth.io/](http://ember-cli-bootstrap3-popover.cybertooth.io/). 

## What Does This Addon Do?

This addon supplies the following _components_:

* `twbs-popover` - a container-like element for the popover's markup, options, methods, and events.
* `twbs-popover/content` - a component you nest inside a `twbs-popover` that will generate
the _content_ for the popover.
* `twbs-popover/title` - a component you nest inside a `twbs-popover` that will generate
the _title_ for the popover.
* `twbs-popover/trigger` - the component you nest inside a `twbs-popover` that acts as the bound element for the 
popover and in normal trigger events will accept clicks, hovering, and focus events to toggle the popover. 

The following _mixin_ also ships with this addon:

* `Popover` - imported as `import Popover as 'ember-cli-bootstrap3-popover/mixins/popover'` and includes all of the
popover options as found in the [Bootstrap documentation](http://getbootstrap.com/javascript/#popovers-options).

_Further information about these items can be found in the Usage section below._

## Requirements

* **Ember >= 2.3.0**: This addon uses the [hash helper](http://emberjs.com/blog/2016/01/15/ember-2-3-released.html#toc_hash-helper) which was introduced in Ember-2.3.0.
* Ember CLI
* You must have Bootstrap 3.x installed in your Ember application.  Feel free to use the
  [ember-cli-bootstrap3-sass](http://emberobserver.com/addons/ember-cli-bootstrap3-sass)
  addon to setup Bootstrap if you haven't already done so.
* Popovers require the _tooltip_ plugin to be included in your version of Bootstrap.

## Installation

The following will install this addon:

```
ember install ember-cli-bootstrap3-popover
```

__As mentioned, you must install Bootstrap3 along with the tooltip plugin.  See the requirements section above.__

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-popover` command once
you are done to get the latest version of the addon.

## Usage

As mentioned above there are dozens of examples on the demonstration site:
[http://ember-cli-bootstrap3-popover.cybertooth.io/](http://ember-cli-bootstrap3-popover.cybertooth.io/)

### Components

#### `{{twbs-popover}}`

A component that contains all of the markup associated with the popover.  You can nest `{{twbs-popover.content}}`,
`{{twbs-popover.title}}`, and `{{twbs-popover.trigger}}` inside this components block.

The reason this addon requires **Ember-2.3.0+** is because this particular component uses the _hash_ helper.

**Be aware that when you nest either the content or title it will be automatically treated as html.** 

##### Arguments

* _All of the properties listed in the `Popover` mixin_.
* `onShow` - the property that accepts an action closure hooked to the bootstrap `show.bs.popover` event.
* `onShown` - the property that accepts an action closure hooked to the bootstrap `shown.bs.popover` event.
* `onHide` - the property that accepts an action closure hooked to the bootstrap `hide.bs.popover` event.
* `onHidden` - the property that accepts an action closure hooked to the bootstrap `hidden.bs.popover` event.
* `onInserted` - the property that accepts an action closure hooked to the bootstrap `inserted.bs.popover` event.

([Check out the demo...](http://ember-cli-bootstrap3-popover.cybertooth.io/))

##### Actions

The following popover methods are exposed as actions:

* `hide` - triggers the hiding of a popover.
* `show` - triggers the showing of a popover.
* `toggle` - toggles a popover.

#### `{{twbs-popover/content}}`

A component that nests inside of a `{{#twbs-popover}}` and generates the content for a popover via its block.
This component promotes the easy re-use of existing components inside the popover content and encourages readable html.

##### Arguments

* _None_.

#### `{{twbs-popover/title}}`

A component that nests inside of a `{{#twbs-popover}}` and generates the title for a popover via its block.
This component promotes the easy re-use of existing components inside the popover title and encourages readable html.

##### Arguments

* _None_.

#### `{{twbs-popover/trigger}}`

A component that nests inside of a `{{#twbs-popover}}` and generates the html element that the popover is bound to.
When the popover is initialized, the markup inside this component becomes the popover.

Seriously, check out the examples and all of this will make sense:
[http://ember-cli-bootstrap3-popover.cybertooth.io/](http://ember-cli-bootstrap3-popover.cybertooth.io/)

##### Arguments

* _None_.

### Mixins

#### `Popover`

A mixin that provides access to all of the Bootstrap popover options as found
here: [http://getbootstrap.com/javascript/#popovers-options](http://getbootstrap.com/javascript/#popovers-options)

##### Properties

* `animation?` (aliased to `animation`)- **Default** `true`
* `content` - **Default** `''`
* `delay` - **Default** `0`
* `delayHide` - **Default** `undefined`
* `delayShow` - **Default** `undefined`
* `html?` (aliased to `html`) - **Default** `false`
* `placement` - **Default** `'right'`
* `popoverContainer` - **Default** `false`
* `popoverTemplate` - **Default** `'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'`
* `popoverTrigger` - **Default** `'click'`
* `selector` - **Default** `false`
* `title` - **Default** `''`

##### Methods

* `getOptions()` - returns a hash containing the options from this mixin
that are used to initialize the Bootstrap popover.

### Troubleshooting And Tips

1. Ember-2.3.0+ is required because this addon uses the _hash_ helper.
1. Bootstrap3 CSS and the tooltip Javascript plugin must be installed.

---

# Ember Addon Building And Testing

## Setup

### Checkout

```
$ git clone git@github.com:cybertoothca/ember-cli-bootstrap3-popover.git
```

### With NPM

```
npm install
```

### With Yarn

```
yarn
```

## Running The Dummy Application

* `ember server`
* Visit your app at http://localhost:4200.

## Running Addon Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building The Addon

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

# Linking This Addon For Local Testing

## Linking

1. From the command line at the root of __this__ project run the
`npm link` command to _link_ this addon within your local
node repository.
1. From the _other_ Ember project that you wish to test this addon
in, execute the following command:
`npm link ember-cli-bootstrap3-popover`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember addon with the version _*_.  It will
look something like this: `"ember-cli-bootstrap3-popover": "*"`.  Now
when/if you execute `npm install` on this _other_ project it
will know to look for the linked addon rather than fetch it from
the central repository.

## Unlinking

1. Remove the addon from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g ember-cli-bootstrap3-popover`
1. Remove the reference to the `ember-cli-bootstrap3-popover`
in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.

# Deploying The Dummy Application

Make sure your `~/.aws/credentials` file has a profile named _cybertooth_ 
with a valid key and secret,

```
[cybertooth]
aws_access_key_id = <KEY>
aws_secret_access_key = <SECRET>
```

Deploy by invoking the following command: `ember deploy production`

Confirm your changes are showing up in our S3 container: http://ember-cli-bootstrap3-popover.cybertooth.io/

# Releasing & Publishing To NPM

```
npm version x.y.z-sub.#
git push
git push --tags
npm publish
```
