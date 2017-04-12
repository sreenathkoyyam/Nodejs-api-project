// calling gulp and nodemon
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');
// adding a gulp task to run app.js
gulp.task('default',function(){

nodemon({
  script : 'app.js',
  ext: 'js',
  env:{
    PORT:7000
  },
  ignore:['./node_modules/**']

})

.on('restart',function(){
  console.log('Restarting');
});

});
