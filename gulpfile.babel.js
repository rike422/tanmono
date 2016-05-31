gulp = require('gulp')
path = require('path')
yargs = require('yargs').yars
template = require('gulp-template')
_ = require('lodash')

option = yargs

function parseOption(args) {
  if (args.name) {

  }
  _option = {};
  _option.name = yargs
}

gulp.task('scaffold', () => {
    gulp.src('template/components/**')
      .pipe(template({option}))
      .dist('src/components/**')
  }
)
