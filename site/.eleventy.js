const postcss = require('postcss');
const cssnano = require('cssnano');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const processor = postcss([cssnano]);
module.exports = (config) => {
  config.setBrowserSyncConfig({
    snippet: false,
  });
  config.addPlugin(syntaxHighlight);
  config.addGlobalData("site_url", "https://cssnano.co")
  config.addTemplateFormats('css');
  config.addExtension('css', {
    outputFileExtension:'css',
    compile: async function(inputContent, inputPath) {
      const result = await processor.process(inputContent, { from: inputPath});
      return async (data) => {
        return result.css;
      }
    }
  });
  config.addPassthroughCopy('./src/img/');
  config.addPassthroughCopy('./src/CNAME');
  config.addPassthroughCopy('./src/.nojekyll');
}
