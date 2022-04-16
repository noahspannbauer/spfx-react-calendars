'use strict';

const build = require('@microsoft/sp-build-web');
const eslint = require('gulp-eslint');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

var getTasks = build.rig.getTasks;
build.rig.getTasks = function () {
  var result = getTasks.call(build.rig);

  result.set('serve', result.get('serve-deprecated'));

  return result;
};

build.tslintCmd.enabled = false;

const eslintSubTask = build.subTask('eslint-subTask', function (gulp, buildOptions, done) {
  return gulp.src(['src/**/*.{ts,tsx}'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
build.rig.addPreBuildTask(build.task('eslint', eslintSubTask));

build.initialize(require('gulp'));
