var socket

function sketch(p) {
  p.setup = setup
  function setup() {
    var parent=document.getElementById("p5parent");
    var p5Canvas=p.createCanvas(600, 600, true);
    p5Canvas.parent("p5parent");

    socket = io(window.location.origin)
    socket.on('connect', () => {
      console.log("~~sketch~MainScreen Socket~~~~~")

      socket.on('sendMousePostoMain', (data)=>{
        console.log("main",data);
        p.ellipse(data.x, data.y, 80, 80);
      })

      socket.on('clearCanvas', ()=>{
        console.log("clearing canvas");
        p5Canvas.clear();
      })
    })
  }
}


function sketch2(p) {
  p.setup = setup
  function setup() {
    var parent=document.getElementById("p5parent");
    var p5Canvas=p.createCanvas(600, 600, true);
    p5Canvas.parent("p5parent");

    socket = io(window.location.origin)
    socket.on('connect', () => {
      console.log("~~sketch~MainScreen Socket~~~~~")

      socket.on('sendMousePostoMain', (data)=>{
        console.log("main",data);
        p.fill(255, 204, 0);
        p.ellipse(data.x, data.y, 80, 80);
      })

      socket.on('clearCanvas', ()=>{
        console.log("clearing canvas");
        p5Canvas.clear();
      })
    })
  }
}


function snakeSketch(p) {
  var x = [],
  y = [],
  segNum = 20,
  segLength = 18;

  for (var i = 0; i < segNum; i++) {
    x[i] = 0;
    y[i] = 0;
  }

  p.setup = setup
  p.draw = draw

  function setup() {
    p.createCanvas(710, 400);
    p.strokeWeight(9);
    p.stroke(255, 100);
  }

  function draw() {
    p.background(0);
    dragSegment(0, p.mouseX, p.mouseY);
    for( var i=0; i<x.length-1; i++) {
      dragSegment(i+1, x[i], y[i]);
    }
  }

  function dragSegment(i, xin, yin) {
    var dx = xin - x[i];
    var dy = yin - y[i];
    var angle = p.atan2(dy, dx);
    x[i] = xin - p.cos(angle) * segLength;
    y[i] = yin - p.sin(angle) * segLength;
    segment(x[i], y[i], angle);
  }

  function segment(x, y, a) {
    p.push();
    p.translate(x, y);
    p.rotate(a);
    p.line(0, 0, segLength, 0);
    p.pop();
  }
}

module.exports = {
  sketch,
  sketch2,
  snakeSketch
}

// function setup() {
//   console.log("We are sketching ellipses!")
//   var parent=document.getElementById("p5parent");
//   var p5Canvas=createCanvas(600, 600, true);
//   p5Canvas.parent("p5parent");

//   socket = io(window.location.origin)
//   socket.on('connect', () => {
//     console.log("~~sketch~MainScreen Socket~~~~~")

//     socket.on('sendMousePostoMain', (data)=>{
//       console.log("main",data);
//       ellipse(data.x, data.y, 80, 80);
//     })

//     socket.on('clearCanvas', ()=>{
//       console.log("clearing canvas");
//       p5Canvas.clear();
//     })
//   })
// }
