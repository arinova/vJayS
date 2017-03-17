var socket;

function setup() {
  var parent=document.getElementById("p5parent");
  console.log("parent", parent.style.width, parent.style.height, parent);
  var p5Canvas=createCanvas(600, 600, true);
  p5Canvas.parent("p5parent");

  socket = io(window.location.origin)
  socket.on('connect', () => {
    console.log("~~sketch~MainScreen Socket~~~~~")
    socket.on('sendMousePostoMain', (data)=>{
      console.log("main",data);

      ellipse(data.x, data.y, 80, 80);
    })
  })


}

function draw() {
}
