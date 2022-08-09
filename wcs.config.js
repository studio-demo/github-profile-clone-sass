module.exports = {
  safeRender: {
    maxInstancesPerComponent: 400,
  },
  boardGlobalSetup: "./src/_wcs/setup.ts",
  newComponent: {
    /* This path is required to create new components through WCS. */
    componentsPath: "src",
    /* This path is only required when using custom templates. */
    templatesPath: "src/wcs-component-templates",
  },
  componentsDiscovery: {
    include: ["src/**"],
    exclude: ["src/wcs-component-templates/**"],
  },
};
