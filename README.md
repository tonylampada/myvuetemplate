# tlvuestarter

This is a fork of [webpack-simple](https://github.com/vuejs-templates/webpack-simple) template, with a few additions of my own.

In particular, there are two things here that you might want to check out, I think those are pretty cool and really improve the development process for web applications:

* The [use of mock-apis](https://medium.com/@tonylampada/javascript-mock-api-why-you-might-want-to-have-one-232b3ba46b12#.wjbs02z48)
* The [Component Catalog](https://medium.com/@tonylampada/component-catalog-why-you-might-want-to-have-one-72ee1dc1f6b1#.zgd3w9lhx) (See a [live demo](https://tonylampada.github.io/tlvuestarter/docs.html#/view/TodoDocs))

Contrary of what `webpack-simple` says, I *do* encourage you to use this template for production projects.

### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init tonylampada/tlvuestarter my-project
$ cd my-project
$ npm install
$ npm run dev
```

### What's Included


- Styling with [Bulma CSS framework](http://bulma.io)
- [Font Awesome](http://fontawesome.io) icons
- Simple AJAX with [axios](https://www.npmjs.com/package/axios)
- `npm run dev`: Webpack + `vue-loader` with proper config for source maps & hot-reload (See a [live demo](https://tonylampada.github.io/tlvuestarter/)).
- `npm run build`: build with HTML/CSS/JS minification.
- Backendless environment with [Mock APIs](#mock-apis)
- `npm run unit`: Run unit tests, *with coverage reports* inside `/coverage`.
- A [Component Catalog](#component-catalog)

### Mock APIs

* [api.js](https://github.com/tonylampada/tlvuestarter/blob/master/template/src/api/api.js) is supposed to know the URLS and implement the calls to your backend api (in this case we are actually consuming endpoints from Github's api, but you'll probably want to consume your own backend here).
* [apimock.js](https://github.com/tonylampada/tlvuestarter/blob/master/template/src/api/apimock.js) is a fake implementation of the same methods, but returning data build with plain javascript.

When you fire the development environment with `npm run dev`, the fake api from `apimock.js` will be used, but when you build the production version with `npm run build`, the real api from `api.js` will be used instead (this is implemented using environment variables in `webpack-config.js`)

[Why would I want to have that?](https://medium.com/@tonylampada/javascript-mock-api-why-you-might-want-to-have-one-232b3ba46b12#.wjbs02z48)

### Component Catalog

There are two SPAs here: `index.html` which is supposed to be your main front-end application, and `docs.html` which is the [Component Catalog](https://medium.com/@tonylampada/component-catalog-why-you-might-want-to-have-one-72ee1dc1f6b1#.zgd3w9lhx).

Any vue component that you create like `src/**/docs/*Docs.vue` will be automatically discovered and added to the docs app.
