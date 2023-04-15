module.exports = {
  config: {
    sourceDirectory: "./docs",
    buildDirectory: "./dist",
    devPort: 8080,
    jsBuildDirectory: "./dist/js",
    jsSourceDirectory: "./assets/js",
    jsMinifyGenerateSourceMap: true,
    jsMinifyOptions: {},
    cssBuildDirectory: "./dist/css",
    cssSourceDirectory: "./assets/css",
    cssMinifyGenerateSourceMap: true,
    cssMinifyOptions: {},
    staticSourceDirectory: "./assets/static",
    staticBuildDirectory: "./dist",
    defaultView: "doc",
    viewPagePath: "./views/pages",
    templates: {
      robots: true,
      nojekyll: "./dist/"
    }
  }
}
