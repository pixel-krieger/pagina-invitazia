const { src, dest, series, watch } = require('gulp');
var postcss = require('gulp-postcss');

function watchTask() {
    watch(
        ['./src/**/*.html', './src/css/*.css'],
        series(archivosHtml, estilos)
    );
}

function archivosHtml() {
    return src('./src/**/*.html')
        .pipe(dest('./dist'));
}

function estilos() {
    return src('./src/css/*.css')
        .pipe(postcss())
        .pipe(dest('./dist/css'));
}



exports.default = series(archivosHtml, estilos, watchTask)