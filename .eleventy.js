
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("node_modeules/scrollreveal");

  eleventyConfig.addShortcode('planet', async function(name, data) {
    return `<section class="${name}">
    <span class="dot"></span>
    <h2>${name}</h2>
    <p>${data}</p>
    </section>`
  });
};