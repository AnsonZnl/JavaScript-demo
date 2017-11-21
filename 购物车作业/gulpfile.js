/*
描述：
配置文件 | 盛邦升华 | 2016-10-7

指南：
- 1. 全局安装 gulp：
npm install --global gulp
- 2. 作为项目的开发依赖安装：
npm install --save-dev gulp
- 4. 运行 gulp：
gulp

*/
var gulp = require('gulp');
var concat = require('gulp-concat'); //合并文件
var sass = require('gulp-sass'); //把 Sass 编译成 CSS
var minifyCss = require('gulp-minify-css'); //最小化 css 文件
var uglify = require('gulp-uglify'); //最小化 js 文件
var rename = require('gulp-rename'); //重命名
var merge = require('merge-stream'); //在一个任务中使用多个文件来源
var htmlmin = require('gulp-htmlmin'); //压缩 HTML 文件
var browserSync = require('browser-sync').create(); //浏览器同步测试工具
var reload = browserSync.reload; //browser-sync任务完成后调用reload
var plumber = require('gulp-plumber'); //防止出错自动退出

//加载gulp-load-plugins插件，并马上运行它
/* var plugins = require('gulp-load-plugins')(); */


//默认执行的流
gulp.task('default', ['serve']);
// 静态服务器 + 监听 scss/js/html 文件
gulp.task('serve', ['concat-css', 'concat-js'], function () {
    browserSync.init({
        server: "./"
    });
    // browserSync.init({
    //     server: {
    //         baseDir: "./",
    //         index: "index.html"
    //     }
    // });
    gulp.watch('scss/**/*.scss', ['concat-css']); //当文件有变化的时候，执行
    gulp.watch('js/script.js', ['concat-js']); //当文件有变化的时候，执行
    gulp.watch("**/*.html").on('change', reload); //当文件有变化的时候，执行
});
//gulp watch
//执行全部自动化的集合，仅仅为了集合 gulp watch-css 和 gulp watch-js 这 2 个命令
gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['concat-css']); //当浏览器
    gulp.watch('js/script.js', ['concat-js']);
});
//gulp concat-css
//合并的 css 包含自定义和插件
gulp.task('concat-css', function () {
    return gulp.src([
            'scss/scss.scss'
        ]) //按顺序合并指定 css 文件
        .pipe(plumber()) //防止出错自动停止gulp
        .pipe(sass().on('error', sass.logError)) //转换到CSS
        .pipe(concat('main.css')) //合并输出后的 css
        .pipe(gulp.dest('css')) //输出
        .pipe(minifyCss({
            compatibility: 'ie8'
        })) //最小化 css 文件
        .pipe(rename("main.min.css")) //重命名
        .pipe(gulp.dest("css")) //再输出压缩后的
        .pipe(reload({
            stream: true
        })) //gulp.dest 后调用browser-sync重载。
    ;
});
//gulp concat-js
//作用于js处理 合并 js 文件
gulp.task('concat-js', function () {
    return gulp.src([
            'js/script.js'
        ]) //按顺序合并指定 js 文件
        .pipe(plumber()) //防止出错自动停止gulp
        .pipe(concat('main.js')) //合并输出后的 js
        .pipe(gulp.dest('js')) //输出
        .pipe(uglify()) //最小化输出后的 js 文件
        .pipe(rename("main.min.js")) //重命名
        .pipe(gulp.dest('js')) //输出最小化后的 js 文件
        .pipe(reload({
            stream: true
        })) //gulp.dest 后调用browser-sync重载。
    ;
});