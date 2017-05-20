var gulp = require('gulp')
var exec = require('child_process').exec

gulp.task('default', () => {
    console.log('Gulp is up and running ...')
})

gulp.task('run-electron', () => {
    exec('electron src/main.js')
})