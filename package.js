Package.describe({
  name: 'timmyg:wow',
  summary: 'WOW css animations ',
  version: '1.0.1',
  git: 'https://github.com/timmyg/meteor-wow.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles(['wow/dist/wow.min.js','wow/css/libs/animate.css'], 'client');
});

Package.onTest(function(api) {
  api.use('timmyg:wow');
});
