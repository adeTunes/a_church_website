var canvas, canvas2, canvas3, ctx, ctx2, ctx3;
var images = ['images/first-pics.jpg', 'images/third.jpg', 'images/fourth.jpg', 'images/fifth.jpg', 'images/sixth.jpg'];
var images2 = [
    'images/member-pic01.jpg', 
    'images/member-pic02.jpg', 
    'images/member-pic03.jpg', 
    'images/member-pic04.jpg', 
    'images/member-pic05.jpg', 
    'images/member-pic06.jpg',
    'images/member-pic07.jpg',
    'images/member-pic08.jpg',
    'images/member-pic09.jpg',
    'images/member-pic10.jpg',
    'images/member-pic11.jpg'
]

var num = 0;
var num2 = 0;

window.onload = function init(){
    // called after the page has been loaded
    canvas = document.querySelector('#myCanvas')
    // important, we will draw with this object
    ctx = canvas.getContext('2d');

    // ready to go! We can use the context for drawing or
    // changing colors, line widths, etc.

    //first something
    ctx.strokeStyle = 'white'
    ctx.fillStyle = 'white';
    ctx.fillRect(450, 30, 10, 20);
    ctx.fillStyle = 'white';
    ctx.fillRect(450, 68, 10, 20);
    ctx.fillStyle = 'white';
    ctx.fillRect(425, 55, 20, 10);
    ctx.fillStyle = 'white';
    ctx.fillRect(465, 55, 20, 10);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(455, 60, 20, 0, 2*Math.PI);// ctx.fill(); //or ctx.stroke() for a wireframe circle
    ctx.stroke()

    // second something
    canvas2 = document.querySelector('#myCanvas2')
    ctx2 = canvas2.getContext('2d');

    ctx2.strokeStyle = 'white'
    ctx2.fillStyle = 'white'
    ctx2.beginPath();
    // ctx2.lineWidth = 0.1;
    ctx2.arc(450, 60, 18, 0, 2*Math.PI);
    ctx2.fill()
    // ctx2.lineWidth = 0.1;
    ctx2.fillRect(442.5, 74, 16, 7);
    ctx2.lineWidth = 3;
    ctx2.strokeStyle = 'yellow'
    ctx2.beginPath();
    ctx2.arc(446, 64, 16, 5.3, 2*Math.PI);
    ctx2.stroke()
    ctx2.lineWidth = 1;
    ctx2.fillRect(441, 85, 20, 3.5);
    
    
    setInterval(preview, 5000);
    setInterval(preview2, 5000);
}

function preview(){
    var slider = document.querySelector('#slider');
    num++
    if(num >= images.length){
        num = 0
    }
    slider.src = images[num];
}

function preview2(){
    var slider2 = document.querySelector('#slider2');
    num2++
    if(num2 >= images2.length){
        num2 = 0
    }
    slider2.src = images2[num2];
}