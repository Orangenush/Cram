module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      node: {
        files: ['app/**/*'],
        tasks: ['nodewebkit'],
        options: {
          spawn: false,
        }
      }
    },
    nodewebkit: {
      options: {
        platforms: ['win'],
        buildDir: './build',
      },
      src: './app/**/*'
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['watch']);
};
