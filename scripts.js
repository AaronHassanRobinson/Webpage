console.log("scripts loaded!")




// ---------------------------------------------------------------------//
// Scripts for the cursor facing cards on the my studies page: 

var container = document.getElementById('mainContainer');
var card = document.getElementsByClassName('card');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  card.style = "";
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
var cardElements = document.getElementsByClassName('card');
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
//for( var i = 0; i< cardElements.length; i++) {
  //console.log("mouse centre @",i, "= ", mouse)

//}


var update = function(event) {
  for(var i = 0; i < cardElements.length; i++) {
  mouse.updatePosition(event);
    console.log("i= ", i, "mouse pos =", mouse)
    updateTransformStyle(
      (mouse.y / cardElements[i].offsetHeight).toFixed(2),
      (mouse.x / cardElements[i].offsetWidth).toFixed(2)
    );
  }
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x/8 + "deg) rotateY(" + y/8 + "deg)";
  //console.log(x,y)

  for(var i = 0; i < cardElements.length; i++) {
    cardElements[i].style.transform = style;
    cardElements[i].style.webkitTransform = style;
    cardElements[i].style.mozTransform = style;
    cardElements[i].style.msTransform = style;
    cardElements[i].style.oTransform = style;
  }
};

// ---------------------------------------------------------------------//
