function headTail(){
    let img = document.getElementById("image");
    img.style.transform = "rotateY(359deg)";
    img.style.translate = "0px -100px";
    img.style.transition = "1s ease"
    let num = Math.floor(Math.random()*2 + 1);
    img.setAttribute("src","coin"+num+".jpg");
}