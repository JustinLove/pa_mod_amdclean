module.exports = function(grunt) {
  var target = grunt.option('target') || '{%= name %}_test'
  var title = '{%= title %} Test'
  if (target == '{%= name %}') {
    title = '{%= title %}'
  }

  // Project configuration.
  grunt.initConfig({
    target: target,
    requirejs: {
      target: {
        options: {
          baseUrl: 'ui/mods',
          mainConfigFile: 'ui/mods/{%= name %}/bootstrap.js',
          skipDirOptimize: true,
          optimize: 'none',
          stubModules: ['text'],

          //name: 'lib/ext/almond',
          name: '{%= name %}/main',
          out: '../<%= target %>/ui/mods/{%= name %}/bootstrap.js',

          skipModuleInsertion: true,
          onBuildWrite: function( name, path, contents ) {
            return require('amdclean').clean({
              code: contents,
              globalObject: true,
              globalObjectName: '{%= name %}',
            });
          },
        }
      }
    },
    copy: {
      simple: {
        files: [
          {
            src: [
              'LICENSE.txt',
              'README.md',
              'CHANGELOG.md',
              'ui/mods/{%= name %}/*.css'],
            dest: '../<%= target %>/',
          },
        ],
      },
      modinfo: {
        files: [
          {
            src: 'modinfo.dev.json',
            dest: '../<%= target %>/modinfo.json',
          },
        ],
        options: {
          process: function(content, srcpath) {
            var info = JSON.parse(content)
            info.date = require('dateformat')(new Date(), 'yyyy/mm/dd')
            info.display_name = title
            info.id = target
            info.identifier = "pa.{%= author_name %}." + target
            info.{%= scene %}.shift()
            console.log(info.version, info.date)
            return JSON.stringify(info, null, 2)
          }
        }
      },
      dev: {
        files: [
          {
            src: 'modinfo.dev.json',
            dest: 'modinfo.json',
          },
        ]
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['requirejs', 'copy:simple', 'copy:modinfo']);

};