/**
 * Created by Leo M. <leomperes@belanton.com> on 5/5/16.
 */

module.exports = function(grunt) {

  grunt.config.set('mochaTest', {
    test: {
      options: {
        reporter: 'spec'
      },
      src: ['tests/**/*.spec.js']
    }
  });

  grunt.loadNpmTasks('grunt-mocha-test');
};
