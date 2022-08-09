# MoBrix-engine-plugin-epics

---

<br>

Use [redux-observable](https://redux-observable.js.org/) epics with [MoBrix-engine system](https://github.com/CianciarusoCataldo/mobrix-engine)

<br>

---

## Getting started

### Installation

Check [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) guide to init the system

If you want to use this plugin with [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine), install it:

```sh
npm i mobrix-engine-plugin-epics
```

<br>

### Usage

Include this plugin inside your MoBrix-engine config file, and optionally set the `epics` field as an array, containing all the epics you want to use:

```tsx
const epicsPlugin = require("mobrix-engine-plugin-epics");

const { createMoBrixEngineAction } = require("mobrix-engine-tools");

const customActionOne = createMoBrixEngineAction("@@custom/action-one");

const customActionTwo = createMoBrixEngineAction("@@custom/action-two");

const config = {
  appName: "custom-app",
  plugins: [epicsPlugin],
  epics: [
    (actions$) =>
      actions$.pipe(filter(customActionOne), mapTo(customActionTwo)),
  ],
};

module.exports = { config };
```

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, add an `interaction` with `epics` plugin, and add your custom epic to the given epics array:

```tsx
//Just a skeleton of a custom plugin that interacts with router plugin
const customPlugin = () => ({
  // Custom plugin stuffs

  interactions: [
    {
      plugin: "epics",
      effect: (epics) => {
        // Custom plugin stuffs

        //Add the custom epic
        epics.push((actions$) =>
          actions$.pipe(filter(customActionOne), mapTo(customActionTwo))
        );

        return epics;
      },
    },
  ],
});
```

<br>

---

## Included libraries

- [redux-observable]https://redux-observable.js.org/) - to use Epics
- [MoBrix-engine-types](https://github.com/CianciarusoCataldo/mobrix-engine-types) - to use MoBrix-engine type definitions inside the plugin
- This library is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
