# ember-cli-bootstrap3-popover [![GitHub version](http://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-popover.svg)](https://badge.fury.io/gh/cybertoothca%2Fember-cli-bootstrap3-popover)

[![npm version](http://badge.fury.io/js/ember-cli-bootstrap3-popover.svg)](http://badge.fury.io/js/ember-cli-bootstrap3-popover) [![CircleCI](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover.svg?style=shield)](http://circleci.com/gh/cybertoothca/ember-cli-bootstrap3-popover) [![Code Climate](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-popover/badges/gpa.svg)](http://codeclimate.com/github/cybertoothca/ember-cli-bootstrap3-popover) ![Dependencies](http://david-dm.org/cybertoothca/ember-cli-bootstrap3-popover.svg) [![ember-observer-badge](http://emberobserver.com/badges/ember-cli-bootstrap3-popover.svg)](http://emberobserver.com/addons/ember-cli-bootstrap3-popover) [![License](http://img.shields.io/npm/l/ember-cli-bootstrap3-popover.svg)](LICENSE.md)

This addon allows you to quickly and conveniently create a [Bootstrap3 Popover](http://getbootstrap.com/javascript/#popovers).

## What Does This Addon Do?

This addon supplied the following _components_:

* `twbs-popover` - an anchor element that will load a popover based on the supplied
title and content attributes.

...and the following _mixins_:

* `Popover` - imported as
`import Popover as 'ember-cli-bootstrap3-popover/mixins/popover'`

_Further information about these items can be found in the Usage
section below._

## Requirements

* Ember >= 1.13.0
* Ember CLI
* You must have Bootstrap 3.x installed in your Ember application.  Feel free to use the
  [ember-cli-bootstrap3-sass](http://emberobserver.com/addons/ember-cli-bootstrap3-sass)
  addon to setup Bootstrap if you haven't already done so.
* Popovers require the _tooltip_ plugin to be included in your version of Bootstrap.

## Installation

The following will install this addon:

    $ ember install ember-cli-bootstrap3-popover

__As mentioned, you must install Bootstrap3 along with the tooltip plugin.  See the requirements section above.__

### Upgrading

When working through the Ember upgrade process, I recommend
invoking the `ember install ember-cli-bootstrap3-popover` command once
you are done to get the latest version of the addon.

## Usage

### Components

#### `{{twbs-popover}}`

A basic component that will trigger a Bootstrap popover when clicked.  This component is
an anchor element that accepts `title` and `content` properties used to generate
the popover.

##### Arguments

* _All of the properties listed in the `Popover` mixin_.
* `href` - the anchors href attribute; there is likely no need to override 
this.**Default `javascript:void(0)`**
* `role` - the elements role attribute.  **Default `link`**.
* `tabindex` - the tabindex.  **Default `undefined`**.

##### Examples

A basic link that will generate a popover when clicked.  The `title` property
will be used in the popover's title, and the content will appear in the
popover body.

    {{#twbs-popover title="Some Title" content="The content."}}
      Click For Popover
    {{/twbs-popover}}

### Mixins

#### `Popover`

A mixin that provides access to all of the Bootstrap popover options as found
here: [http://getbootstrap.com/javascript/#popovers-options](http://getbootstrap.com/javascript/#popovers-options)

##### Properties

* `animation?` (aliased to `animation`)- **Default `true`**
* `content` - **Default `''`**
* `delay` - **Default `0`**
* `html?` (aliased to `html`) - **Default `false`**
* `placement` - **Default `'right'`**
* `popoverContainer` - **Default `false`**
* `popoverTrigger` - **Default `'click'`**
* `selector` - **Default `false`**
* `template` - **Default `'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'`**
* `title` - **Default `''`**

##### Methods

* `getOptions()` - returns a hash containing the options from this mixin
that are used to initialize the Bootstrap popover.

### Troubleshooting And Tips

1. Bootstrap3 CSS and the tooltip Javascript plugin must be install.

---

# Ember Addon Building And Testing

## Setup

* `git clone git@github.com:cybertoothca/ember-cli-bootstrap3-popover.git`
* `npm install`
* `bower install`

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
1. Run an `npm prune` from the root of your _other_ project's command line.
