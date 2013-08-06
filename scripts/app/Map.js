define(['app/Tile'], function(Tile) {
  var Map = function() {

    this.tiles = [];
    this.rows = 11;
    this.columns = 8;
    this.count = 88; /* 8x11 */    

    // void
    // constructs the map object.
    this.init = function(options) {
      for(var i = 0; i < this.count; i++) {
        var tile = new Tile();
        tile.init({
          x: 10,
          y: 20,
          context2d: options.context2d
        });
        this.tiles.push(tile);
      }
    };

    this.draw = function() {
      for(var i = 0; i < this.count; i++) {
        this.tiles[i].draw();
      } 
    }
  };
  return Map;
});
