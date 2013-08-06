define(['app/Tile'], function(Tile) {
  var Map = function() {

    this.tiles = [];
    this.count = 88; /* 8x11 */

    // void
    // constructs the map object.
    this.init = function(options) {
      for(var i = 0; i < this.count; i++) {
        this.tiles.push(new Tile());
      }
    };
  };
  return Map;
});
