Package.describe({
  name: 'devian:semantic-ui',
  version: '2.1.4',
  summary: 'Official Semantic UI Integration for Meteor',
  git: 'https://github.com/Semantic-Org/Semantic-UI-Meteor.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "generateSemanticUi",
  use: [
    'ejson@1.0.6',
    'devian:semantic-ui-data@2.1.4'
  ],
  sources: [
    'semantic-ui.js',
    'data/definitions-data.js',
    'data/themes-data.js',
    'data/sites-data.js',
    'data/custom-semantic-data.js',
    'plugins/file-handler.js',
    'plugins/definitions-generator.js',
    'plugins/themes-generator.js',
    'plugins/sites-generator.js',
    'plugins/custom-semantic-json-generator.js',
    'plugins/generator.js'
  ],
  npmDependencies: {
    "lodash": "3.6.0",
    "diff": "1.3.2"
  }
});
