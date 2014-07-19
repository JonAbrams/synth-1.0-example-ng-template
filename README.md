Example /front directory structure proposed for next major version of [Synth](https://github.com/JonAbrams/synth). Imagine using this directory structure in `myapp/front/…` for future Synth projects.

## Support js, css, and html freedom

The first goal is to get away from siloing js, css, and html/jade/ejs files into their own directories. Instead it'd be great to allow the use of the more popular 'modular' layout schemes. This requires html and js files to live happily side by side.

## Better names of view partials

It would also be nice to get away from requiring preloaded html view templates to use names like `get.jade` and `getIndex.jade`. Instead, note how this directory structure uses `app/tweets/tweetsIndex.jade` and `app/tweets/tweetsShow.jade`. Synth would then look for files named this way when trying to preload a view.

For example, if a user goes to http://example.com/tweets, Synth will render `front/app/layout.jade`, and preload `front/app/tweets/tweetsIndex.jade` into the response. If the user instead first hits up `front/app/tweets/123`, Synth will still render `front/app/layout.jade` but will preload `front/app/tweets/tweetsShow.jade` instead.

## Smarter asset loading

The way that Synth loaded js files previously was to just read `front/js/jsFiles`. Now, it will still load files specified by `front/jsFiles` (for 3rd party files found in bower_components), but will also recursively load every js file that exists in `front/app`, with the exception of `…test[s].js` and `…spec[s].js` files, since those are obviously test files. This can also be used to load specific js files found in `front/app` earlier in the process if need be. Coffeescript files will be treated the same as js files.

CSS files will be loaded in the exact same manner as JS files too, but have their own `cssFiles` manifest.

## Gulp!

And the big change here is that there is a gulpfile for configuring how the assets are compiled, yay!

## Feedback plz!

This is still early stages and none of the above mentioned functionality has been implemented. Please discuss on the [existing Synth github issue](https://github.com/JonAbrams/synth/issues/51).
