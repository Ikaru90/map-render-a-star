const Room = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.hasInteresect = function(room) {
    return !(room.x >= (this.x + width) || this.x >= (room.x + room.width)
      || room.y >= (this.y + height) || this.y >= (room.y + room.height));
  };

  this.getRoomCenter = function() {
    return {
      x: this.x + Math.floor(this.width / 2),
      y: this.y + Math.floor(this.height / 2),
    };
  };
};

module.exports = Room;
