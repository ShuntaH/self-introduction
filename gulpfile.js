const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

/* sassのコンパイル */
/* gulp sassで起動 */
gulp.task("sass", () =>
  gulp
    .src("scss/*.scss", {
      base: "./scss"
    })
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("css"))
);

/* gulp sass:watchで起動 */
gulp.task("sass:watch", () => {
  /* "./scss/*.scss"の変更を監視して、変更があった場合にはsassタスクを毎回実行 */
  gulp.watch("./scss/**/*.scss", gulp.task("sass"));
});

/* デフォルトではsassタスクを起動 */
gulp.task("default", gulp.series(gulp.parallel("sass")));
