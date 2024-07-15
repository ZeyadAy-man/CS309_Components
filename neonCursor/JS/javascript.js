let x = 0;
let y = 0;
function cursorMover(e){
    document.getElementById("cursor").style.left = e.clientX - 10 + "px";
    document.getElementById("cursor").style.top = e.clientY - 10 + "px";
    // console.log(x + "  " + y);
}