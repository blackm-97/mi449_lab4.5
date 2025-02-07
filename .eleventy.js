
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode('planet', async function(name, data) {
    return `<section>
    <h2>${name}</h2>
    <p>${data}</p>
    </section>`
  });
};