/*
    2025, cowwabanga
    DVD_logo.svg from https://en.m.wikipedia.org/wiki/File:DVD_logo.svg
*/
let xx = 0;
let yy = 0;
let hvel = 7; // horizontal velocity
let vvel = 7; // vertical velocity
let logo;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(128, 255, 255, 128);
    xx = windowWidth / 2;
    yy = windowHeight / 2;
    logo = loadImage("../assets/DVD_logo.svg");
    imageMode(CENTER);
}

function draw() {
    background(255);
    image(logo, xx, yy);
    xx += hvel;
    if (xx > windowWidth - logo.width / 2 || xx < logo.width / 2)
        hvel = -hvel;
    yy += vvel;
    if (yy > windowHeight - logo.height / 2 || yy < logo.height / 2)
        vvel = -vvel;
}