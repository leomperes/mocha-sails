/**
 * Created by Leo M. <leomperes@belanton.com> on 5/5/16.
 */

module.exports = function (grunt) {
  // grunt.registerTask('tests', ['mochaTest']);
  grunt.registerTask('test', [
    'mocha_istanbul:coverage'
  ]);
};
