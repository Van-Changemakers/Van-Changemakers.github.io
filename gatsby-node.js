exports.createPages = (({ actions }) => {
  const { createPage } = actions;

  // create highlights pages
  for (let index = 0; index < 3; index++) {
    createPage({
      path: `/highlights/${index}`,
      component: require.resolve("./src/components/dialogue/pages/highlights.js"),
      context: {
        index
      }
    })
  }

  // create organizations pages
  for (let index = 0; index < 2; index++) {
    createPage({
      path: `/organizations/${index}`,
      component: require.resolve("./src/components/dialogue/pages/resources.js"),
      context: {
        index
      }
    })
  }
});