requirejs({

  // RequireJS configuration

  // cache bust! Please remove in a production environment
  urlArgs: "bust=" + (new Date()).getTime(),

  paths: {
    jquery: 'http://code.jquery.com/jquery-1.10.1.min'
  }

});

require(['app']);
