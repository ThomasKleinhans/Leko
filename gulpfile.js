const gulp = require('gulp')
const svgSprite = require('gulp-svg-sprite')

function svg() {
  return gulp.src('assets/svg/*.svg')
	  .pipe(svgSprite({
	  	mode: {
	  		symbol: {
	  			dest: '.',
	  			sprite: 'sprite.svg'
	  		}
	  	}
	  }))
	  .pipe(gulp.dest('static'));
}

function copy() {
  return gulp.src(['img/**/*','.htaccess'], { "base" : "."}).pipe(gulp.dest('production-ready/'));
}

module.exports = {
	svg,
	copy
}
