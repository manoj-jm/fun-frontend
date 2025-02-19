let crs = document.querySelector('#cursor');
let crsb = document.querySelector('#cursor_blur');


document.addEventListener("mousemove",(e)=>{
  crs.style.left = e.x + "px"
  crs.style.top = e.y+"px"
  crsb.style.left = e.x-100 + "px"
  crsb.style.top = e.y-100 + "px"


})
 


gsap.to("#nav",{
  backgroundColor:"#000",
  duration:1,
  height:"100px", 
  scrollTrigger:{
    trigger : "#nav",
    scroller:"body",
    // markers:true,
    start:"top -10%",
    end : "top -11%",
    scrub:1
  }
}) 

document.querySelector("video").playbackRate = 1.75; // 1.75x speed


gsap.to("#main",{
  backgroundColor:"#000",
  duration:2,
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -19%",
    end:"top -50%",
    // markers:true,
    scrub:2
  }
})