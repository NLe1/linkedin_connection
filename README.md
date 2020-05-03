## This Project folk from this github open source

[react-chrome-extension-boilerplate](https://github.com/duo-labs/chrome-extension-boilerplate)\

#### Demo

[![](http://img.youtube.com/vi/yInhJtQkjcw/0.jpg)](http://www.youtube.com/watch?v=yInhJtQkjcw "")

## Installation

```bash
# clone it
$ git clone https://github.com/NLe1/linkedin_connection.git

# Install dependencies
$ npm install
```

## Development

- Run script

```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```


## Test

 All the tests currently needed to support, all of the current testcases are delegated from the original boilerplates

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)
