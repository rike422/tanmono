# [tanmono](http://rike422.github.io/tanmono/)

[demo](https://rike422.github.io/tanmono/)

A project template for creating stand-alone my React components. It is pre-configured with

- React
- Babel
- CSSModules
- SASS
- Webpack
- karma
- mocha + power-assert

## Utility Commands

```
bin/cli [subCommand]
```

#### options

```
  Usage: cli [options] [command]


  Commands:

    generate|g [name]  generate component
    destroy|d [name]   destroy component
    help [cmd]         display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

### `cli generate`

```
bin/cli generate
```

options:

```
  Usage: cli-generate [options] [command]

  Commands:

    component|c [name]  generate component
    storybook|s         generate react-story-book.config
    help [cmd]          display help for [cmd]

  Options:

    -h, --help  output usage information
```

#### -c, --component

Generete react component skelton

```
 bin/cli g c Button -p type:string:require,name:string -c defalut,alert,denger

// will result in this

src
├── components
│   ├── button
│   │   ├── README.md
│   │   ├── button.jsx
│   │   └── style.scss
│   └── stories
│       └── button.jsx
└── index.js
test
└── components
    └── button
        └── button_spec.jsx
```

options:

```
  Usage: cli-generate-component [options]

  Options:

    -h, --help                      output usage information
    -p, --prop-types <propTypes>    Define propTypes
    -c, --css-classes <cssClasses>  Define css class
```

#### -s, --story

Update .storybook/config.js

Look up javascript file in `src/componets/stories/*.js` file


### how to test

```
npm run test
```
