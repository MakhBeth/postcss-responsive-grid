# THIS PROJECT IS NOT READY TO BE USED
## Wait for it. You can start subscribing if you want
What's that? "**R**eally, **A**nother **O**ne **R**esponsive **G**rid???" or **GROAR** if you prefer, is simply a set of utilities to manage column based design. It will work with grids rules and we will try to support not only modern browsers but also IE10+ (hopefully)





# PostCSS Responsive Grid [![Build Status][ci-img]][ci]

[PostCSS] plugin that help you to manage a column based grid.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/makhbeth/postcss-responsive-grid.svg
[ci]:      https://travis-ci.org/makhbeth/postcss-responsive-grid

```css
.grid {
  groar-display: grid-full;
  groar-layout:
      .col-a 3,
      .col-b 4,
      .col-c auto,
      .col-d full;
}
```

```css
.grid {
  /* MAGIC WILL GO HERE 🎩 */
}
```

## Usage

```js
postcss([ require('postcss-responsive-grid') ])
```

See [PostCSS] docs for examples for your environment.
