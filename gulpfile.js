const { src, dest, task, series } = require('gulp');
const exec = require('child_process').exec;


/**
 * Task: tailwind 
 */
task('tailwind', function (cb) {
  const command = 'npx tailwindcss -i ./assets/src/css/input.css -o ./assets/dist/css/output.css';
  exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

task('default', series(
  'tailwind'
));