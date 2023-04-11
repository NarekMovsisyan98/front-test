import gulp from "gulp";
import browsersync from "browser-sync";
import {deleteAsync} from 'del'
import gulp_sass from "gulp-sass";
import sass0 from "sass";


const sass = gulp_sass(sass0);
function watching() {
    gulp.watch('src/scss/**/*', styles);
    gulp.watch('src/js/*.*', scripts);
    gulp.watch('src/images/**/*', images);
    gulp.watch('src/*.html', html)
}

function styles() {
    return gulp.src([
        'src/scss/style.scss',
    ])
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('dist/css'));
}

function scripts() {
    return gulp.src('src/js/*.*').pipe(gulp.dest('dist/js/'));
}

function images() {
    return gulp.src('src/img/**/*').pipe(gulp.dest('dist/img'));
}

function html() {
    return gulp.src('src/*.html').pipe(gulp.dest('dist/'));
}

function reset() {
    return deleteAsync('dist');
}

function server() {
    browsersync.init({
        server: {
            baseDir: `dist`
        },
        notify: false,
        port: 3000,
    });
}

export {styles}
export {scripts}
export {images}
export {html}
export {server}
export {reset}
const mainTasks = gulp.parallel(html, styles, scripts, images);
export const build = gulp.series(reset,mainTasks);
export const dev = gulp.series(reset,mainTasks, gulp.parallel(watching, server));