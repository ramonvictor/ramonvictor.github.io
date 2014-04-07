var gulp = require('gulp');
var protractorQA = require('gulp-protractor-qa');


gulp.task('protractor-qa', function() {
    protractorQA.init({
        testSrc : 'test/**/*-spec.js',
        viewSrc : 'app/**/*.html'
    });
});

gulp.task('default', ['protractor-qa']);