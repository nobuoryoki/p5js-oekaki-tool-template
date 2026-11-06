function setup() {
	const canvas = createCanvas(600, 600, SVG);
	canvas.parent('my-sketch');
	background(0, 0, 0);
}

function draw() {
	if (mouseIsPressed) {
		noFill();
		stroke(255, 255, 255);
		circle(mouseX, mouseY, mouseY);
	}
}

function keyPressed() {
	if (key === 's') {
		save("sample.svg");
	}
}
