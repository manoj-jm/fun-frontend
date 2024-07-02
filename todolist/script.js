const inputbox = document.getElementById("to-do-things");
const listcoll = document.getElementById("listcontainer");

//select the ❌ (span) element

addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputbox.value === "") {
    alert("type something");
  } else {
    let newli = document.createElement("li");
    newli.innerHTML = inputbox.value;
    // newli.setAttribute('class','unchecked')
    let span = document.createElement("span");
    span.setAttribute("class", "lispan");
    span.innerHTML = "❌";
    newli.appendChild(span);
    listcoll.appendChild(newli);
  }
  inputbox.value = " ";
  savedata();
}

listcoll.addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName == "LI") {
      console.log("come");
      e.target.classList.toggle("checked");
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

//save data even after refreshing or revisited the page
function savedata() {
  localStorage.setItem("data", listcoll.innerHTML);
}
function showdata() {
  listcoll.innerHTML = localStorage.getItem("data");
}

showdata();
// Load data when the page is loaded
window.onload = loadData;
