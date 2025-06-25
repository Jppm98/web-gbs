
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
