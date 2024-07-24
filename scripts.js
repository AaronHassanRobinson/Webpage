console.log("scripts loaded!")


var container = document.getElementById('mainContainer');
var inner = document.getElementById('card');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};




container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};


// Init
var container = document.getElementById('mainContainer');
var innerElements = document.getElementsByClassName('card');
// Mouse 
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the container.
mouse.setOrigin(container);


var update = function(event) {
  mouse.updatePosition(event);

  for(var i = 0; i < innerElements.length; i++) {
    updateTransformStyle(
      (mouse.y / innerElements[i].offsetHeight/2).toFixed(2),
      (mouse.x / innerElements[i].offsetWidth/2).toFixed(2)
    );
  
  
  }

};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  //console.log(x,y)

  for(var i = 0; i < innerElements.length; i++) {
    innerElements[i].style.transform = style;
    innerElements[i].style.webkitTransform = style;
    innerElements[i].style.mozTransform = style;
    innerElements[i].style.msTransform = style;
    innerElements[i].style.oTransform = style;
}

};