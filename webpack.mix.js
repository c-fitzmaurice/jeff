let mix = require('laravel-mix');
let build = require('./source/tasks/build.js');
require('laravel-mix-purgecss');
require('laravel-mix-tailwind');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch([
            'source/**/*.md',
            'source/**/*.php',
            'source/**/*.scss',
            '!source/**/_tmp/*',
        ]),
    ],
});

mix.js('source/_assets/js/main.js', 'js')
    .sass('source/_assets/sass/main.scss', 'css')
    .tailwind('./tailwind.config.js')
    .options({
        processCssUrls: false,
    })
    .version();
