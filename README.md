# react-native-easy-uuid

Get uuid from **native code**.
Zero Dependency. Tiny.
Typescript typings.

Compatible with both old arch and TurboModules

## Installation

```sh
yarn add react-native-easy-uuid && npx pod-install
```

## Usage

```js
import { uuid } from 'react-native-easy-uuid';

// ...

console.log(uuid()); // F987E967-A5B4-46D2-A94D-8D2319C7B531
```

## Troubleshooting
The library is exposing synchronous methods which prevents using the Google Chrome debugger.
See these links for more information:
- https://reactnative.dev/docs/native-modules-android#synchronous-methods
- https://reactnative.dev/docs/native-modules-ios#synchronous-methods

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
