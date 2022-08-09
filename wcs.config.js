module.exports = {
  safeRender: {
    maxInstancesPerComponent: 400,
  },
  boardGlobalSetup: "./src/_wcs/setup.ts",
  newComponent: {
    /* This path is required to create new components through WCS. */
    componentsPath: "src",
  },
  componentsDiscovery: {
    include: ["src/**"],
    exclude: ["src/wcs-component-templates/**"],
  },
};
