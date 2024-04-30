let ele = document.querySelectorAll('.elem');
ele.forEach(function(det){
det.addEventListener("mouseenter",function(){
//    console.log(det.lastElementChild);
   let image = det.lastElementChild;
   image.style.transform = ' translateX(60px) scale(2)';
   image.style.opacity = 1;

})
det.addEventListener("mouseleave",function(){
    let image = det.lastElementChild;
   image.style.opacity = 0;
})
})