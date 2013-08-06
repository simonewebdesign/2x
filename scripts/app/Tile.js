define(function() {

  var Tile = function() {

    // static
    this.px = 15;
    // static
    this.resolution = 2;

    this.backgroundColor = '#FFAAAA';
    this.backgroundImage = '';
    this.vector = {};
    this.isObstacle = false;
    this.ancestors = [];
  };

  return Tile;

});
