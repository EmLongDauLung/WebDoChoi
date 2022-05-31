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
// function prev()
// {
//     index--;
//     if(index <= 0)
//         index = 5;
//     var img__bgreview = document.getElementById("img__bgreview");
//     img__bgreview.src = arr_img[index];
// }
setInterval(next,3000);
// Hiệu ứng chọn ảnh nhỏ mở ra ảnh lớn trong phần sản phẩm-products
var img_products=[
    "../assets/img/Uchiha Madara (2).jpg",
    "../assets/img/Uchiha Madara (1).jpg",
    "../assets/img/Uchiha Madara (3).jpg",
    "../assets/img/Uchiha Madara (4).jpg",
    "../assets/img/Uchiha Madara (5).jpg",
]

var dem = 0;

function img_product1(){
    dem = 0;
    var img_products_big = document.getElementById("img_products_big");
    img_products_big.src = img_products[dem];
}

function img_product2(){
    dem = 1;
    var img_products_big = document.getElementById("img_products_big");
    img_products_big.src = img_products[dem];
}

function img_product3(){
    dem = 2;
    var img_products_big = document.getElementById("img_products_big");
    img_products_big.src = img_products[dem];
}

function img_product4(){
    dem = 3;
    var img_products_big = document.getElementById("img_products_big");
    img_products_big.src = img_products[dem];
}

function img_product5(){
    dem = 4;
    var img_products_big = document.getElementById("img_products_big");
    img_products_big.src = img_products[dem];
}

// Nextimg_products = function next_img_products()
// {
//     dem++;
//     if(dem >= img_products.length)
//         dem = 0;
//     var img__bgreview = document.getElementById("img_products_big");
//     img__bgreview.src = img_products[dem];
// }
// setInterval(Nextimg_products,3000);

// mở form đăng kí
function op_register(){
    let register = document.getElementById("createacc");
    register.style.display = "block";

    let login = document.getElementById("login");
    login.style.display = "none";

    let btnlogin = document.getElementById("btn_login")
    btnlogin.style.display = "block";

    let btnregister = document.getElementById("btn_createaccount");
    btnregister.style.display = "none";
}

function op_login(){
    let register = document.getElementById("createacc");
    register.style.display = "none";

    let login = document.getElementById("login");
    login.style.display = "block";

    let btnlogin = document.getElementById("btn_login")
    btnlogin.style.display = "none";

    let btnregister = document.getElementById("btn_createaccount");
    btnregister.style.display = "block";
}