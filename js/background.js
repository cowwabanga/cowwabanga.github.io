/*
    2025, cowwabanga
    DVD_logo.svg from https://en.m.wikipedia.org/wiki/File:DVD_logo.svg
*/
let xx = 0;
let yy = 0;
let hvel = 3; // horizontal velocity
let vvel = 3; // vertical velocity
let logo;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    xx = windowWidth / 2;
    yy = windowHeight / 2;
    logo = loadImage("../assets/DVD_logo.svg");
    imageMode(CENTER);
}

function draw() {
    background(255);
    image(logo, xx, yy, logo.width / 4, logo.height / 4);
    xx += hvel;
    if (xx > windowWidth - logo.width / 8 || xx < logo.width / 8)
        hvel = -hvel;
    yy += vvel;
    if (yy > windowHeight - logo.height / 8 || yy < logo.height / 8)
        vvel = -vvel;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}