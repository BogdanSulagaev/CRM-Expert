'use strict';

var gulp = require('gulp'),
    bower = require('gulp-bower'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    htmlmin = require('gulp-htmlmin'),
    htmlhint = require("gulp-htmlhint"),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        jade: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        php: 'build/php/'
    },
    src: { //Пути откуда брать исходники
        jade: 'src/template/*.jade', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'src/fonts/**/*.*',
        php: 'src/php/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        jade: 'src/**/*.jade',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        php: 'src/php/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Developer"
};

// gulp.task('jade:build', function () {
//     gulp.src(path.src.jade) //Выберем файлы по нужному пути
//         .pipe(rigger()) //Прогоним через rigger
//         .pipe(jade({
//             pretty: true
//         }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
//         .pipe(gulp.dest(path.build.jade)) //Выплюнем их в папку build
//         .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
// });


gulp.task('jade:build', function() {
    gulp.src(['./src/template/*.jade', '!./src/template/_*.jade'])
        .pipe(jade({
            pretty: true
        }))  // Собираем Jade только в папке ./assets/template/ исключая файлы с _*
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('./build/')) // Записываем собранные файлы
    .pipe(reload({stream: true})); //И перезагрузим сервер
}); 


gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('php:build', function() {
    gulp.src(path.src.php)
        .pipe(gulp.dest(path.build.php))
});

gulp.task('build', [
    'jade:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'php:build'
]);


gulp.task('watch', function(){
    watch([path.watch.jade], function(event, cb) {
        gulp.start('jade:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
    watch([path.watch.php], function(event, cb) {
        gulp.start('php:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);

 
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('build/'))
});




