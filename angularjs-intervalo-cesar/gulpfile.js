var gulp = require('gulp');
var protractorQA = require('gulp-protractor-qa');


gulp.task('protractor-qa', function() {
    protractorQA.init({
        testSrc : 'test/po/*.po.js',
        viewSrc : [ 'index.html', 'app/**/*.html' ]
    });
});

gulp.task('default', ['protractor-qa']);