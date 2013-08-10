define(['app/Tile', 'helper/randomHexColor.js/randomHexColor'], function(Tile) {
  var Map = function() {

    this.tiles = [];
    //this.rows = 11;
    //this.columns = 8;
    this.count = 192; /* 12x16 */
    this.width = 120;
    this.height = 160;
    this.tileDimension = 10;

    // void
    // constructs the map object.
    this.init = function(options) {

      var x = 0,
          y = 0,
          bg = '#ffffff';

      for(var i = 0; i < this.count; i++) {

        //console.log(x + ', ' + y);

        var tile = new Tile();

        tile.init({
          x: x,
          y: y,
          context2d: options.context2d,
          backgroundColor: randomHexColor()
        });
        this.tiles.push(tile);


        x += tile.dimension;
        if (x != 0 && x % this.width == 0) {
          x = 0;
          y += tile.dimension;
        }        

      }
    };
    // void
    // draws every tile of the map.
    this.draw = function() {
      for(var i = 0; i < this.count; i++) {
        this.tiles[i].draw();
      } 
    }
  };
  return Map;
});
