# yaml-jest-transform

This is a transform for yaml files in jest

> **Warning** : Version 2 is for jest version 8, for version 7 use version 1 of this package

## Install

Use the one of the following commands :

```
$ yarn add yaml-jest-transform
$ npm i --save yaml-jest-transform
```

## Usage

In your jest config, use it like this :

```
transform: {
  '\\.yaml$': 'yaml-jest-transform',
},
```

## Inspiration

This package is no different from [jest-yaml-transform](https://github.com/akameco/jest-yaml-transform) except it is up to date
