animationFadeInModule
=========

The animationFadeInModule can be used to provide smooth transitions of elements on the page as the user scrolls. This allows elements to subtlely fade-in and ultimate provides a better user experience. This uses the filter opacity CSS 3 element, so likely won't work in IE. This is okay because it doesn't impact the way the user can consumer the information.

## There are a few things to know before using this in your project:

1. For starters, I built this with my boilerplate but you *DON'T* need my boilerplate to make the module work in your project

2. The module requires the HTML to build it, the CSS to style it and the JS/JQuery to give it the functionality

5. Questions?
    * Adam.Knee@dcsg.com

## Using the boilerplate & getting started:

mySpaceBase
=========

### mySpaceBase is a Sass-based responsive CSS framework built on spaceBase.

## Getting Started
```sh
1. $ git clone https://user-name@bitbucket.org/dsgfed/myspacebase.git
2. $ npm i
3. $ gulp launch or 'gulp dev' to start the tasker
```
4. Open scss/_vars.scss to make changes to your global variables.
4. Start building out your HTML. I've included index.html as a starting point.
6. scss/base/ is the core of mySpaceBase. Build your UI layer in scss/ui/
7. Do a find and replace on the entire project directory for '.mySpaceBaseWrap' and replace the name with your project specfic name (e.g. '.gameCrusher3' )

Many CSS frameworks are meant to be included and left alone. But mySpaceBase is a boilerplate layer that can be built upon and tailored for your needs. It combines best practices for today’s responsive web with the core components we use on every project. Consider it the launch pad for your adventures into cyberspace.

mySpaceBase is the front-end starter files for any new web project. It sets up your Sass architecture and normalizes your CSS and native HTML elements. It provides the structural groundwork for your application.

Built on spaceBase:
[![Build Status](https://img.shields.io/travis/space150/spaceBase.svg?style=flat-square)](https://travis-ci.org/space150/spaceBase)

### Highlights

* Object-oriented CSS
* Optimized for light speed
* Common UI components (buttons, lists, media object)
* Helper classes and mixins
* Cross-browser form controls
* Built on REMs, with px fallback
* Supports modern browsers including IE8+

### Customizable Features

* Compatible with any Sass 3.3 compiler
* Start with Normalize (default) or CSS Reset
* Scalable, mobile-first grid - choose how robust you want it
* Base font size for mobile vs desktop
* Global variables for breakpoints, colors, fonts and more


Your editor can be setup with EditorConfig so that code style standards are enforced automatically. See http://editorconfig.org/#download and install the plugin for your editor of choice.

## IMPORTANT

* If you're building a static content page for DSG, GGXY, or FnS, import the code base from 'app/scss/sites-base/' . This way your local build will have the same starting files as the site.

## The mySpaceBase structure

Read the [CSS Architecture Overview](app/scss/README.md) for documentation of the SCSS files.

```
Build in the app directory. 

app/
  assets/
    fonts/
    images/
    media/
scss/
  base/
    ...
  ui/
    ...
  vendor/
    ...
  sites-base/
    ...
  _manifest.scss
  _vars.scss
  application-ie.scss
  application.scss
  styleguide.scss
css/
  application-ie.css
  application.css
  styleguide.css
js/
  scripts.js
```

You can remove:
- `bower.json`
- `Gemfile`
- `Gemfile.lock`
- `Rakefile`
- `test/`
(If you download the original)

## Credits

* [Harry Robert’s Inuit.css](https://github.com/csswizardry/inuit.css)
* [Sass MQ](https://github.com/sass-mq/sass-mq)
* [Bootstrap](http://getbootstrap.com)
* [HTML5 Boilerplate](http://html5boilerplate.com)
* [Normalize.css](http://necolas.github.io/normalize.css)
* [Eric Meyer’s CSS Reset](http://meyerweb.com/eric/tools/css/reset)

## License

mySpaceBase is free to use under the [MIT License](LICENSE.md).

Copyright 2017 [Adam Knee](http://www.adamknee.net)

## Original Boilerplate License:

spaceBase is free to use under the [MIT License](LICENSE.md).

Copyright 2016 [space150](http://www.space150.com)
