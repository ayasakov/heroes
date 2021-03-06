(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'moment':                     'node_modules/moment/moment.js', // required by ng2-bootstrap
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'object-assign':              'node_modules/object-assign/index.js',
    'rxjs':                       'node_modules/rxjs',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { defaultExtension: 'js', format: 'register' },
    'ng2-bootstrap':              { defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages,
  };

  System.config(config);
  System.import('app/boot')
    .then(null, console.error.bind(console));

})(this);