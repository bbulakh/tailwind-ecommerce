const { src, dest, task, series } = require('gulp');
const exec = require('child_process').exec;


/**
 * Task: tailwind 
 */
task('tailwind', function (cb) {
  const command = 'npx tailwindcss -i ./src/assets/src/css/tailwind-ecommerce.css -o ./public/assets/dist/css/tailwind-ecommerce.css';
  exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

task('default', series(
  'tailwind'
));