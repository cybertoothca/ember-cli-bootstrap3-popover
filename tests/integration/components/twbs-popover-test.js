import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('twbs-popover', 'Integration | Component | twbs popover', {
  integration: true
});

test('when passing a block it is used as the anchor text', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('when initialized the bootstrap popover is initialized', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('data-original-title'), '',
    'Assuming the popover is activated because the `data-original-title` attribute is set');
});

test('has `twbs-popover` class', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);

  assert.ok(this.$('a').hasClass('twbs-popover'));
});

test('when the anchor is rendered the role defaults to javascript:void(0)', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('href'), 'javascript:void(0)'); // jshint ignore:line
});

test('when the anchor is rendered the role defaults to link', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('role'), 'link');
});

test('when the anchor is rendered the tabindex defaults to undefined', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('tabindex'), undefined);
});

test('when passing href it is appended as an attribute to the anchor', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover href="someHref"}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('href'), 'someHref');
});

test('when passing role it is appended as an attribute to the anchor', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover role="someRole"}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('role'), 'someRole');
});

test('when passing tabindex it is appended as an attribute to the anchor', function (assert) {
  // Template block usage:
  this.render(hbs`
    {{#twbs-popover tabindex=1}}
      template block text
    {{/twbs-popover}}
  `);

  assert.equal(this.$('a').attr('tabindex'), 1);
});
