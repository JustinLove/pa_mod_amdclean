require.config({
  baseUrl: "coui://ui/mods",
  paths: {
    text: '{%= name %}/text',
  }
})
require(['{%= name %}/main'])
