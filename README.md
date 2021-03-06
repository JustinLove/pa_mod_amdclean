# PA Mod Amdclean

A [grunt-init](http://gruntjs.com/project-scaffolding) template for a basic Planitary Annihilation UI mod.

The generated template will place large text on the specified scene (`live_game` by default)

The generated project is set up to use combine files using [RequireJS](http://requirejs.org/) and [amdclean](https://github.com/gfranko/amdclean), with build automation through [Grunt](http://gruntjs.com/), which combines the JS, inlines HTML, copies files, and edits `modinfo.json` to fix up paths and names.
The generated project includes a `package.json` that lists the dependencies, but you'll need to run `npm install` to download them.

The repository expects to be in a mod folder named `{%= name %}_dev`.  The default grunt task builds to `{%= name %}_test`.  The 'production' build is through:

    grunt --target={%= name %}

During development, RequireJS is loading files on demand, but the browser cache often doesn't keep up with recent changes.  With the debugger attached, use the "disable cache" setting (see gear icon in bottom right).

For further modding info, check out the forums.

- https://forums.uberent.com/threads/pa-modding-reference-guides-applications-tools.48136/
- https://forums.uberent.com/threads/guide-getting-your-mod-on-pamm.55189/
