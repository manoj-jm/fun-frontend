let main = document.querySelector('#main');
var cur = document.querySelector(".cursor");


main.addEventListener("mousemove",(e)=>{
    // console.log(e.y);
    cur.style.left = e.x + "px"
    cur.style.top = e.y + "px"

})