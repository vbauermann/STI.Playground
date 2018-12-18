var gulp = require('gulp');

gulp.task('generate-service-worker', function (callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'wwwroot';

    swPrecache.write(path.join(rootDir, 'service-worker.js'), {
        staticFileGlobs: [
            rootDir + '/app/**/*.{js,html}',
            rootDir + '/assets/**/*.{css,js,png,svg}',
            rootDir + '/lib/angular/angular.min.js',
            rootDir + '/lib/angular-ui-router/release/angular-ui-router.min.js'],
        stripPrefix: rootDir
    }, callback);
});