#!/usr/bin/env node

const process = require('process');
const program = require('commander');
const changCase = require('change-case');
const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;
program.parse(process.argv);
const name = program.args[0];

if(name == undefined) {
  console.error('Abort.. [name] is required');
  process.exit(1);
}

const directoryName = changCase.paramCase(name);
const SRC_DIR = path.join(__dirname, '../', 'src', 'components', directoryName);
const TEST_DIR = path.join(__dirname, '../', 'test', 'components', directoryName);
const STORY_FILE = path.join(__dirname, '../', 'src', 'components', 'stories', `${directoryName}.jsx`);

[SRC_DIR, TEST_DIR, STORY_FILE]
  .filter((filepath) => fs.existsSync(filepath))
  .forEach((filepath) => {
    exec('rm -r ' + filepath, function(err, stdout, stderr) {
      if(err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`rm ${filepath}`);
    });
  });
