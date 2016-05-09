/**
 * Created by Leo M. <leomperes@belanton.com> on 5/5/16.
 */

module.exports = function (grunt) {

  // grunt.config.set('mochaTest', {
  //   tests: {
  //     options: {
  //       reporter: 'spec'
  //     },
  //     src: ['tests/**/*.spec.js']
  //   }
  // });

  grunt.config.set('mocha_istanbul', {
    coverage: {
      src: 'tests', // the folder, not the files
      options: {
        coverageFolder: 'coverage',
        mask: '**/*.spec.js',
        root: 'api/'
      }
    }
  });

  // grunt.loadNpmTasks('grunt-mocha-tests');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
};
