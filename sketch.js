// example of using p5 random()

function setup() {
	createCanvas(640, 480);
	noStroke();

 frameRate(2)
}

function draw() {

	var dayNight = random(1);

	// draw background
	if (dayNight < 0.5) {
		// day
		background(30, 200, 225);
		fill(90, 100, 40);
		rect(0, 400, 640, 80);
	} else {
		// night
		background(20, 50, 100);
		fill(100, 90, 100);
		rect(0, 400, 640, 80);
	}


	// draw sun
	if (dayNight < 0.5) {
		fill(250, 200, 0);
		ellipse(random(320, 640), random(0, 280), 100, 100);

//clouds
		fill(255, 255, 255);
		ellipse(random(0, 300), random(0, 280), 200, 70);

		fill(255, 255, 255);
		ellipse(random(300, 600), random(0, 280), 150, 40);

		fill(255, 255, 255);
		ellipse(random(200, 500), random(0, 280), 100, 30);
	}

	// draw stars
	if (dayNight > 0.5) {
		fill(250, 250, 250);
		var starSize;
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(4, 10);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
	}


// draw tree
	var treeX = random(0, 200);
	if (dayNight < 0.5) {
		fill(0, 150, 0);
	} else {
		fill(0, 80, 0);
	}
	triangle(treeX, 300, treeX - 50, 425, treeX + 50, 425);
	triangle(treeX, 240, treeX - 30, 325, treeX + 30, 325);

	var treeY = random(210, 410);
	if (dayNight < 0.5) {
		fill(0, 150, 0);
	} else {
		fill(0, 80, 0);
	}
		triangle(treeY, 300, treeY - 50, 425, treeY + 50, 425);
		triangle(treeY, 240, treeY - 30, 325, treeY + 30, 325);

		var treeZ = random(420, 640);
		if (dayNight < 0.5) {
			fill(0, 150, 0);
		} else {
			fill(0, 80, 0);
		}
			triangle(treeZ, 300, treeZ - 50, 425, treeZ + 50, 425);
			triangle(treeZ, 240, treeZ - 30, 325, treeZ + 30, 325);



//noLoop();

}
