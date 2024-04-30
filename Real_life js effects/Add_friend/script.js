let frd = document.querySelector("#add");
// let nfrd = document.querySelector("#remove");
flag = true;
frd.addEventListener("click", function () {
  if (flag === true) {
    let ch = document.querySelector("h5");
    ch.innerHTML = "Friend";
    ch.style.color = "coral";
    flag = false;
  } else {
    let ch = document.querySelector("h5");
    ch.innerHTML = "Stranger";
    ch.style.color = `rgb(83,77,77)`;
    flag = true;
  }
});

// nfrd.addEventListener("click", function () {
//   let ch = document.querySelector("h5");
//   ch.innerHTML = `Stranger`;
//   ch.style.color = 'rgb(83, 77, 77)';
// });
