# zrgs

**WIP**

Tiny cli args module

--------

## Installation

`npm i zrgs`

## Usage

```javascript
const { hasFlag, args } = require('zrgs')

if (hasFlag('help')) {
  // display help
} else if (hasFlag('something')) {
  handleSomething(args)
}
```

## License

[MIT](./LICENSE.md)
