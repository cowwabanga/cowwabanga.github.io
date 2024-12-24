let xx = 0;
let yy = 0;
let hvel = 7; // horizontal velocity
let vvel = 7; // vertical velocity
let c_size = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    fill(128, 255, 255, 128);
    xx = windowWidth / 2;
    yy = windowHeight / 2;
}



function draw() {
    background(255);
    ellipse(xx, yy, 100, 100);
    xx += hvel;
    if (xx > windowWidth - c_size / 2 || xx < c_size / 2)
        hvel = -hvel;
    yy += vvel;
    if (yy > windowHeight - c_size / 2 || yy < c_size / 2)
        vvel = -vvel;
}