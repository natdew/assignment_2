var img;

function setup() {
	createCanvas(640, 480);
	noStroke();
	frameRate(4);
	img = loadImage("imgres.jpg");
}

function draw() {
	// rect(width/2, height/2, 100, 100);


	var dayNight = random(1);

	// draw background
	if (dayNight < 0.5) {
		// day
		background(150, 150, 230);
		fill(90, 90, 40);
		rect(0, 400, 640, 80);
	} else {
		// night
		background(20, 20, 40);
		fill(30, 30, 100);
		rect(0, 400, 640, 80);
	}


	// draw sun
	if (dayNight < 0.5) {
		fill(250, 200, 0);
		ellipse(random(320, 640), random(0, 280), 100, 100);
	}

	// draw stars
	if (dayNight > 0.5) {
		fill(250, 250, 250);
		var starSize;
		starSize = random(4, 20);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
	}

	// draw tree
	var treeX = random(0, 320);
	if (dayNight < 0.5) {
		fill(0, 150, 0);
	} else {
		fill(0, 80, 0);
	}
	triangle(treeX, 300, treeX - 50, 425, treeX + 50, 425);
	triangle(treeX, 240, treeX - 30, 325, treeX + 30, 325);


	// noLoop();
	image(img, 0, 0);
}
