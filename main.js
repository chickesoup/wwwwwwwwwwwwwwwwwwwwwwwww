function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();

  tint_color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(tint_color);
  fill("red");
  stroke("red");
  circle(50,50,30);
  circle(600,50,30)
  circle(50,450,30)
  circle(600,450,30)
fill("blue");
stroke("blue");
rect(40,65,20,370)
rect(590,65,20,370)
rect(60,40,530,20)
rect(60,440,530,20)
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	tint_color = document.getElementById("color_name").value;
}
