#!/usr/bin/env node

const process = require('process');
const program = require('commander');
const path = require('path');
const fs = require('fs');
const generate = require('./_generator-util');
const TEMPLATE_FILES = [
  {
    from: path.join('.storybook', 'config.js.njk'),
    to: path.join('.storybook', 'config.js'),
  },
];

program.parse(process.argv);

function walkSync(dir) {
  const dirFiles = fs.readdirSync(dir);
  const files = dirFiles.map((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      return walkSync(path.join(dir, file));
    } else {
      return path.join(dir, file);
    }
  });
  return Array.prototype.concat.apply([], files);
}

const storyFiles = walkSync(path.join('src', 'components', 'stories'));
const context = {
  storyFilePaths: storyFiles.map((file) => path.relative('./.storybook', file)),
};

generate(TEMPLATE_FILES, context);
