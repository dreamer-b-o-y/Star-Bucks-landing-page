let img = document.getElementById('img');
let icon1 = document.getElementById('icon1');
let icon2 = document.getElementById('icon2');
let icon3 = document.getElementById('icon3');
let circleR = document.getElementById('circleR');
let circler = document.getElementById('circler');
let circleL = document.getElementById('circleL');
let btn = document.getElementById('btn');
let str = document.getElementById('str');
function getSRC(Z) {
    img.src = Z;
   
}
icon1.onclick = function(){
    getSRC(this.src);
    circle('#153e17')
    inCircle('#215523')
    contentColor('#0b6e0e')
}
icon2.onclick = function(){
    getSRC(this.src);
    circle('#ec5c85')
    inCircle('#eb7495')
    contentColor('#eb7495')
}
icon3.onclick = function(){
    getSRC(this.src);
    circle('#cd38a3')
    inCircle('#d752b1')
    contentColor('#d752b1')
}
function circle(X) {
    circleL.style.backgroundColor = X;
    circler.style.backgroundColor = X;
   
}
 function inCircle(y) {
    circleR.style.backgroundColor = y;
}
function contentColor(l) {
    btn.style.backgroundColor = l;
    str.style.color = l;
}
    