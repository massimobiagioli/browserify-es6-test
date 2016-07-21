module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['./dist'],
        browserify: {
            development: {
                src: [
                    "./js/main.js",
                    "./js/MyModule.js"                   
                ],
                dest: './dist/js/common.js',
                options: {
                    browserifyOptions: { debug: true },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                      ["factor-bundle", { outputs: [
                            "./dist/js/main.js",                           
                        ] }]
                      ]
                }
            },
            production: {
                src: [
                    "./js/main.js",
                    "./js/MyModule.js"
                ],
                dest: './dist/js/common.min.js',
                options: {
                    browserifyOptions: { debug: false },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                    plugin: [
                        ["factor-bundle", { outputs: [
                            "./dist/js/main.min.js"
                        ] }],
                        ["minifyify", { map: false }]
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'browserify']);
};