const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addCollection("published", (collection) => {
    return collection
      .getFilteredByTags("post")
      .filter((post) => !post.data.draft);
  });
};
