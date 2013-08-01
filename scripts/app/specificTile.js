define(['app/tile'], function(tile) {

  var specificTile = function() {

  };

  specificTile.prototype = new tile();

  return specificTile;

});
