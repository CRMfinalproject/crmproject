// В переменные получаем установленные пакеты
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const mmq = require('gulp-merge-media-queries');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const rigger = require('gulp-rigger');
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const order = require("gulp-order");

const path = {
  src: {
    html: "src/html/*.html",
    scss: "src/scss/*.scss",
    js: "src/js/*.js",
    img: "src/images/**/*.+(png|jpg|gif|svg)",
    fonts: "src/fonts/**/*.*"
  },
  dist: {
    html: "dist/html",
    css: "dist/css/",
    js: "dist/js/",
    img: "dist/images/",
    fonts: "dist/fonts/"
  }
};


// Создаем таск для сборки html файлов
gulp.task('html', () => {
  // Берем все файлы с расширением html в папке src
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({ stream: true }))
});


// Создаем таск для сборки css файлов
gulp.task('css', () => {
  // Берем только файл styles.scss в папке src, в который импортируеются паршалы
  return gulp.src(path.src.scss)
    // Преобразовываем sass в css
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    // Создаем вендорные префиксы
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // Группируем медиа правила
    .pipe(mmq({
      log: false
    }))
    // Минифицируем css
    .pipe(cssnano())
    // Выкидываем css в папку dist
    .pipe(gulp.dest(path.dist.css))
    // Говорим browser-sync о том что пора перезагрузить барузер так как файл изменился
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Создаем таск для оптимизации картинок
gulp.task('img', () => {
  // Берем все картинки из папки img
  return gulp.src(path.src.img)
    // Пробуем оптимизировать
    .pipe(imagemin(
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })))
    // Выкидываем в папку dist/img
    .pipe(gulp.dest(path.dist.img))
    // Говорим browser-sync о том что пора перезагрузить барузер так как файл изменился
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Таск копирования всех шрифтов из папки fonts в dist/fonts
gulp.task('fonts', () => {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dist.fonts))
    // Говорим browser-sync о том что пора перезагрузить барузер так как файл изменился
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('js', () => {
  return gulp.src(path.src.js)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(order([
      'data.js',
      'tabs.js',
      'table-control-block.js',
      
      'edit-actions.js',
      'table.js',
      'field-settings.js',
      '*.js'
    ]))
    .pipe(concat('index.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Таск слежения за изменениями файлов
gulp.task('watch', () => {
  // Следим за изменениями в любом html файле и вызываем таск 'html' на каждом изменении
  gulp.watch(path.src.html, ['html']);
  // Следим за изменениями в любом sass файле и вызываем таск 'css' на каждом изменении
  gulp.watch(path.src.scss, ['css']);
  // Следим за изменениями картинок и вызываем таск 'img' на каждом изменении
  gulp.watch(path.src.img, ['img']);
  // Следим за изменениями в шрифтах и вызываем таск 'fonts' на каждом изменении
  gulp.watch(path.src.fonts, ['fonts']);
  // Следим за изменениями в скриптах и вызываем таск 'js' на каждом изменении
  gulp.watch(path.src.js, ['js']);
});

// Таск создания и запуска веб-сервера
gulp.task('server', () => {
  browserSync({
    server: {
      // указываем из какой папки "поднимать" сервер
      baseDir: "./dist",
      index: '/html/index.html'
    },
    //  browser: 'google chrome',
    // Говорим спрятать надоедливое окошко обновления в браузере
    notify: false
  });
});


// Таск удаления папки dist, будем вызывать 1 раз перед началом сборки
gulp.task('del:dist', () => {
  return del.sync('./dist');
});

// Таск который 1 раз собирает все статические файлы
gulp.task('build', ['html', 'css', 'img', 'fonts', 'js']);

// Главный таск, сначала удаляет папку dist,
// потом собирает статику, после чего поднимает сервер
// и затем запускает слежение за файлами
// Запускается из корня проекта командой npm start
gulp.task('start', ['del:dist', 'build', 'server', 'watch']);


// Создать таск 'js' для обработки JavaScript файлов.Добавить обработку файлов пакетом gulp- babel.
// Для таска 'js' добавить конкатенацию и минификацию JavaScript файлов c пакетами gulp- concat и gulp- uglify.


