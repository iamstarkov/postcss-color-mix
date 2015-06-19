# postcss-color-mix

> Mix two colors together in [PostCSS][PostCSS]

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

## Install

    npm install --save postcss-color-mix

## Usage

    postcss([ require('postcss-color-mix') ])

See [PostCSS] docs for examples for your environment.


```css
.foo {
  color: mix(#f00, #00f);      /*  #800080  */
  color: mix(#f00, #00f, 25%); /*  #4000BF  */
  color: mix(rgba(255, 0, 0, 0.5), #00f); /*  rgba(64, 0, 191, 0.75)  */
}
```


## License

MIT © [Vladimir Starkov](https://iamstarkov.com/)

[PostCSS]: https://github.com/postcss/postcss

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
