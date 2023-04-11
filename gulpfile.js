const { src, dest, task, series } = require("gulp");
const exec = require("child_process").exec;
const htmlreplace = require("gulp-html-replace");
const rename = require("gulp-rename");
const md5File = require("md5-file");

/**
 * Task: tailwind
 */
task("tailwind", function (cb) {
  const command =
    "npx tailwindcss -i ./src/assets/src/css/tailwind-ecommerce.css -o ./public/assets/dist/css/tailwind-ecommerce.css";
  exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

task("pretty", function (cb) {
  const command = "npx prettier --write src/pages/*.html";
  exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

task("build-pages", function () {
  return src("./src/pages/*.html").pipe(dest("./public/"));
});

task("build-images", function () {
  return src("./src/assets/images/*.{png,svg,ico,jpg}").pipe(
    dest("./public/assets/images/")
  );
});

task("build-css-version", function () {
  const hash = md5File.sync("./public/assets/dist/css/tailwind-ecommerce.css");
  return src("./public/assets/dist/css/tailwind-ecommerce.css")
    .pipe(rename(`tailwind-ecommerce-${hash}.css`))
    .pipe(dest("./public/assets/dist/css/"));
});

task("build-html-updates", function () {
  const hash = md5File.sync("./public/assets/dist/css/tailwind-ecommerce.css");
  return src("./public/*.html")
    .pipe(
      htmlreplace({
        css: `/assets/dist/css/tailwind-ecommerce-${hash}.css`,
      })
    )
    .pipe(dest("public/"));
});

task(
  "default",
  series(
    "tailwind",
    "build-pages",
    "build-images",
    "build-css-version",
    "build-html-updates"
  )
);

task(
  "build",
  series(
    "tailwind",
    "build-pages",
    "build-images",
    "build-css-version",
    "build-html-updates"
  )
);
