var xPos = document.body.clientWidth - 20;
var yPos = document.body.clientHeight / 2;
var step = 1;
var delay = 5;
var height = 0;
var Hoffset = 0;
var Woffset = 0;
var yon = 0;
var xon = 0;
var pause = true;
var interval;
userxd.style.top = yPos;
function changePos() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    Hoffset = userxd.offsetHeight;
    Woffset = userxd.offsetWidth;
    userxd.style.left = xPos + document.body.scrollLeft;
    userxd.style.top = yPos + document.body.scrollTop;
    if (yon) {
        yPos = yPos + step;
    } else {
        yPos = yPos - step;
    }
    if (yPos < 0) {
        yon = 1;
        yPos = 0;
    }
    if (yPos >= (height - Hoffset)) {
        yon = 0;
        yPos = (height - Hoffset);
    }
    if (xon) {
        xPos = xPos + step;
    } else {
        xPos = xPos - step;
    }
    if (xPos < 0) {
        xon = 1;
        xPos = 0;
    }
    if (xPos >= (width - Woffset)) {
        xon = 0;
        xPos = (width - Woffset);
    }
}
function start() {
    userxd.visibility = "visible";
    interval = setInterval('changePos()', delay);
}
function pause_resume() {
    if (pause) {
        clearInterval(interval);
        pause = false;
    } else {
        interval = setInterval('changePos()', delay);
        pause = true;
    }
}
start();