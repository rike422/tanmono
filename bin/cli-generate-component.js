#!/usr/bin/env node

const process = require('process');
const program = require('commander');
const changCase = require('change-case');
const path = require('path');
const generate = require('./_generator-util');

program.parse(process.argv);
const name = program.args[0];

if(name == undefined) {
  console.error('Abort.. [name] is required');
  process.exit(1);
}

const context = {
  className: changCase.pascalCase(name),
  directoryName: changCase.paramCase(name),
  pkg: require('../package.json'),
};

const GENERATE_FILES = [
  {
    from: path.join('src', 'component', 'component.jsx.njk'),
    to: path.join('src', 'components', context.directoryName, `${context.directoryName}.jsx`),
  },
  {
    from: path.join('src', 'component', 'README.md.njk'),
    to: path.join('src', 'components', context.directoryName, 'README.md'),
  },
  {
    from: path.join('src', 'component', 'style.scss.njk'),
    to: path.join('src', 'components', context.directoryName, 'style.scss'),
  },
  {
    from: path.join('src', 'stories', 'story.js.njk'),
    to: path.join('src', 'components', 'stories', `${context.directoryName}.jsx`),
  },
  {
    from: path.join('tests', 'test.js.njk'),
    to: path.join('test', 'components', context.directoryName, `${context.directoryName}_spec.jsx`),
  },
];

generate(GENERATE_FILES, context);