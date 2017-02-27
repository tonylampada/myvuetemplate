# tlvuestarter

A fork of [webpack-simple](https://github.com/vuejs-templates/webpack-simple) template, with a few additions of my own.

In particular, there two things here that you might want to check out:

* The [use of mock-apis](https://medium.com/@tonylampada/javascript-mock-api-why-you-might-want-to-have-one-232b3ba46b12#.wjbs02z48)
* The Component Catalog

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
- `npm run dev`: Webpack + `vue-loader` with proper config for source maps & hot-reload.
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

There are two SPAs here: `index.html` which is supposed to be your main front-end application, and `docs.html` which is an auxiliary application that I call *Component Catalog*.

A Component Catalog is an application that displays a list of available components and how to use them.

Any vue component that you create like `src/**/docs/*Docs.vue` will be automatically discovered and added to the docs app.

The docs application is able to display both the working component and its source code.

For instance, the `TodoDocs.vue` sample component is an example of how to use the `Todo` component (which in this case is as simple as adding a `<Todo></Todo>` tag in your template)

I have found that having a component catalog like that is useful for web development for a number of reasons:

1. During development, you can have a place to manually test a component, isolated from the rest of your application.
2. If you publish to docs.html somewhere you and your team will have a handy list of available components that you can re-use and avoid re-inventing a few wheels.
3. The ability to see the the actual source code for sample components combined with some diligence and discipline to create sample components for that important parts of your application will give you a documentation system that will save a lot of time of people asking again and again how to use a given component.
