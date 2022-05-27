var arr_img=[
    "./assets/img/lego1.jpg",
    "./assets/img/bg1.jpg",
    "./assets/img/transformer1440x600.jpg",
    "./assets/img/bg5.png",
    "./assets/img/bg6.jpg",
    "./assets/img/bg4.jpg",
]
var index = 0;
function next()
{
    index++;
    if(index >= arr_img.length)
        index = 0;
    var img__bgreview = document.getElementById("img__bgreview");
    img__bgreview.src = arr_img[index];
}
function prev()
{
    index--;
    if(index <= 0)
        index = 5;
    var img__bgreview = document.getElementById("img__bgreview");
    img__bgreview.src = arr_img[index];
}
Nextimg = function next_img()
{
    index++;
    if(index >= arr_img.length)
        index = 0;
    var img__bgreview = document.getElementById("img__bgreview");
    img__bgreview.src = arr_img[index];
}
setInterval(Nextimg,3000);