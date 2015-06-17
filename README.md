# postcss-color-mix

> Mix two colors together

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

Mixes two colors together. Specifically, takes the average
of each of the RGB components, optionally weighted by the given percentage.
The opacity of the colors is also considered when weighting the components.

The weight specifies the amount of the first color that should be included
in the returned color. The default, 50%, means that half the first color
and half the second color should be used. 25% means that a quarter
of the first color and three quarters of the second color should be used.


[PostCSS] plugin color mix function ported from SASS.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/iamstarkov/postcss-color-mix.svg
[ci]:      https://travis-ci.org/iamstarkov/postcss-color-mix

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-color-mix') ])
```

See [PostCSS] docs for examples for your environment.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)

[npm-url]: https://npmjs.org/package/postcss-color-mix
[npm-image]: https://img.shields.io/npm/v/postcss-color-mix.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/postcss-color-mix
[travis-image]: https://img.shields.io/travis/iamstarkov/postcss-color-mix.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/postcss-color-mix
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/postcss-color-mix.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/postcss-color-mix
[depstat-image]: https://img.shields.io/david/iamstarkov/postcss-color-mix.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/iamstarkov/postcss-color-mix
[depstat-dev-image]: https://img.shields.io/david/dev/iamstarkov/postcss-color-mix.svg?style=flat-square
