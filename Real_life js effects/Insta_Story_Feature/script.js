let arr = [
  {
    dp: "dog.jpeg",
    story:
      "https://images.unsplash.com/photo-1703342181521-bae93c2a4ce9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1701762292571-2875f1e522b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    story:
      "https://plus.unsplash.com/premium_photo-1701121214648-245e9c86cc92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1702910931509-ce00cb33231b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1703028408757-a95781e09832?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
];
var clutter = "";
var storyhd = document.querySelector("#storyh");
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
            <img id = "${idx}"src="${elem.dp}" alt="">
                </div>`;
});
storyhd.innerHTML = clutter;

storyhd.addEventListener("click", function (e) {
  let id = e.target.id;
  console.log(arr[id]);
  let st = arr[id].story;
  let stcrd = e.target;
  //console.log(stcrd);
  document.querySelector("#full-screen").style.display = "block";
  setTimeout(() => {
      document.querySelector('#full-screen').style.display = "none";
      console.log(stcrd.parentElement.style.border = 'none')
}, 2000);
document.querySelector("#full-screen").style.backgroundImage = `url(${st})`;

});
