// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("karma-sonarqube-reporter")
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "coverage"), reports: [ "html", "lcovonly" ],
      fixWebpackSourcePaths: true
    },
    sonarqubeReporter: {
      basePath: "src/app",        // test files folder
      filePattern: "**/*spec.ts", // test files glob pattern
      encoding: "utf-8",          // test files encoding
      outputFolder: "reports",    // report destination
      legacyMode: false,          // report for Sonarqube < 6.2 (disabled)
      reportName: (metadata) => { // report name callback
        /**
         * Report metadata array:
         * - metadata[0] = browser name
         * - metadata[1] = browser version
         * - metadata[2] = plataform name
         * - metadata[3] = plataform version
         */
         return metadata.concat("xml").join(".");
      },
    },

    reporters: ["progress", "kjhtml", "sonarqube"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false
  });
};
