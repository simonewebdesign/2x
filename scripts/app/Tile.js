define(['app/Vec2'], function(Vec2) {

  var Tile = function() {

    this.context2d = {};
    this.imageData = {};

    // static
    this.px = 15;
    // static
    this.resolution = 2;
    this.dimension = this.px * this.resolution;

    this.backgroundColor = '#FFAAAA';
    this.backgroundImage = '';
    this.vector2d = {};
    this.isObstacle = false;
    this.ancestors = [];

    // void
    this.init = function(options) {
      this.context2d = options.context2d;
      this.vector2d = new Vec2(options.x, options.y);
    }

    // void
    this.draw = function(){
        this.context2d.fillStyle = this.backgroundColor;


        var x = this.vector2d.x
          , y = this.vector2d.y
          , width = this.dimension
          , height = this.dimension

        this.context2d.fillRect(x, y, width, height);
        this.imageData = this.context.getImageData(x,
                                                   y,
                                                   width,
                                                   height);            
    }
  };

  return Tile;

});
