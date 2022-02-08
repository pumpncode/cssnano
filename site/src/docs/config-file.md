---
id: config-file
title: Configuration
layout: layouts/AdvertLayout.njk
order: 3
---

You can configure cssnano either in the PostCSS configuration or in a dedicated cssnano configuration. The PostCSS configuration takes precedence over the dedicated cssnano configuration.
Without configuration, cssnano runs with the `default` preset.

## Configuration files
### Configure through the PostCSS configuration

In the [PostCSS configuration](https://github.com/postcss/postcss#usage), you can pass both the `preset` and `plugins` options when you add `cssnano` to the PostCSS plugins. For example, if you use PostCSS programmatically, the following uses cssnano with the `lite` preset and adds the autoprefixer plugin.

```js
import postcss from 'postcss';
import cssnano from 'cssnano';
import litePreset from 'cssnano-preset-lite';
import autoprefixer from 'autoprefixer';
const preset = litePreset({ discardComments: false });

postcss([cssnano({ preset, plugins: [autoprefixer] })]).process("/* Your CSS here */")
```

### Configure through a dedicated cssnano configuration

You can configure cssnano with a dedicated configuration, for example if you cannot access the PostCSS configuration file. The cssnano configuration can be in different formats:

* a `cssnano` option in `package.json`
* a JSON file named `.cssnanorc.config.json` or `.cssnanorc`
* a file named `cssnano.config.js` that exports the configuration as a JavaScript object


## Configuration options

### Choose a preset

- **option:** `preset` 
-  **type:** `string` | `function` | `[string, Objects<preset options here>]` | `[function(preset options here)]`

Pass a preset to choose a pre-configured set of optimizations. You can specify a preset with the preset name as a string or by passing the result of importing the preset package.

With the preset as import:

```js
cssnano({ preset: require('cssnano-preset-default') })
```

Using a string is useful if you use a configuration file in the JSON format.


```js
cssnano({ preset: 'cssnano-preset-default' })
```

When you use a string, if the preset is called `cssnano-preset-<name>`, you can use `name` alone:

```js
cssnano({ preset: 'default' })
```

### Disable a plugin included in a preset
You can disable one or more of the plugins used in a preset.
Pass an array where the first element is the preset and the second is an object with the preset options. 


```js
// cssnano.config.js
module.exports = {
  preset: [ require('cssnano-preset-default'), { discardComments: false } ]
};
```


You can also pass preset options when you use the preset name as a string:
For example, here's how to deactivate the `discardComments` plugin when using the `advanced` preset:

```js
cssnano({ preset: ['cssnano-preset-advanced', { discardComments: false }] })
```


### Use individual plugins

- **option:** `plugins`
- **type:** `Array<'string' | 'function' | ['string' | 'function', Object<Options for the plugin here>]>`

You can also pass a list of plugins to cssnano.
To configure the individual plugins, use an array of arrays:

```js
cssnano({ plugins: [['autoprefixer', {}]] })
```

- **Example:**
   
  ```js
  // cssnano.config.js
  module.exports = {
    plugins: [require('autoprefixer')]
    
    // or
    plugins: ['autoprefixer', 'postcss-preset-env']
    
    // or
    plugins: [ 
      ['autoprefixer', { remove: false }],
    ]

    // or
    plugins: [
      [ require('autoprefixer'), {remove: false} ],
      [ 'postcss-preset-env']
    ]
  }
  ```

You can configure cssnano either in the PostCSS configuration file or in a dedicated cssnano configuration file. The PostCSS configuration file takes precedence over the dedicated cssnano configuration.
If you don't pass any configuration, cssnano runs with the `default` preset.


## Configure through PostCSS configuration files

In the [PostCSS configuration file](https://github.com/postcss/postcss#usage), you can pass both the `preset` and `plugins` options when you add `cssnano` to the PostCSS plugins. For example, if you use PostCSS programmatically, the following uses cssnano with the `lite` preset and adds autoprefixer.

```js
import postcss from 'postcss';
import cssnano from 'cssnano';
import litePreset from 'cssnano-preset-lite';
import autoprefixer from 'autoprefixer';
const preset = litePreset({ discardComments: false });

postcss([cssnano({ preset, plugins: [autoprefixer] })]).process("/* Your CSS here */")
```

## Configure through dedicated `cssnano` configuration

If you cannot configure cssnano in the PostCSS configuration file, you can configure cssnano with a cssnano configuration option in `package.json` or with a dedicated configuration file. This file can be in different formats.

* `.cssnanorc.config.json` and `.cssnanorc` must contain a JSON object
* `cssnano.config.js` must export the configuration as a JavaScript object


## Options

### `preset`

- **Type:** `string` | `function` | `[string, Objects<preset options here>]` | `[function(preset options here)]`

Pass a preset to choose a pre-configured set of optimizations. You can either import the preset package or use the preset name as a string.

With the preset as import:

```js
cssnano({ preset: require('cssnano-preset-default') })
```

Using a string is useful if you use a configuration file in the JSON format.
When you use a string, if the preset is called `cssnano-preset-<name>`, use `name` alone:

```js
cssnano({ preset: 'default' })
```

Presets themselves can take options.
Pass options to the preset by using an array where the first element is the preset and the second is an object with the preset options. 
You can specify a preset with the preset name as a string or by passing the result of importing the preset package.

```js
// cssnano.config.js
module.exports = {
  preset: [ require('cssnano-preset-default'), { discardComments: false } ]
};
```


You can also pass preset options when you use the preset name as a string:
For example, here's how to deactivate the `discardComments` plugin when using the `advanced` preset:

```js
cssnano({ preset: ['advanced', { discardComments: false }] })
```


### `plugins`

- **Type:** `Array<'string' | 'function' | ['string' | 'function', Object<Options for the plugin here>]>`

In addition to the preset, you can pass a list of plugins to cssnano.
This is equivalent to adding the plugins after cssnano in the PostCSS plugins array.
If you want to configure the individual plugins, use an array of arrays:

```js
cssnano({ plugins: [['autoprefixer', {}]] })
```

- **Example:**
   
  ```js
  // cssnano.config.js
  module.exports = {
    plugins: [require('autoprefixer')]
    
    // or
    plugins: ['autoprefixer', 'postcss-preset-env']
    
    // or
    plugins: [ 
      ['autoprefixer', { remove: false }],
    ]

    // or
    plugins: [
      [ require('autoprefixer'), {remove: false} ],
      [ 'postcss-preset-env']
    ]
  }
  ```
