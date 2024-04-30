var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
  var rectloc = rect.getBoundingClientRect();
  // console.log(details.clientX - rectloc.left - 0.5);
  var inside = details.clientX - rectloc.left;
  if (inside < rectloc.width / 2) {
    var red = gsap.utils.mapRange(0, rectloc.width / 2, 255, 0, inside);
    gsap.to(rect, {
      backgroundColor: `rgb(${red},0,0)`,
      ease: Power4,
    });
  } else {
    var blue = gsap.utils.mapRange(
      rectloc.width / 2,
      rectloc.width,
      0,
      255,
      inside
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blue})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "rgb(255,255,255)",
  });
});
