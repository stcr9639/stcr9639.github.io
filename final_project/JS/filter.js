filterSelection("all");
function filterSelection(c) {
  const grid = document.querySelector(".my-row");
  console.log(document.querySelector('.my-row')); // Should print the element or null
  console.log(document.body.innerHTML); // Check if .my-row exists in the DOM
  const elements = document.getElementsByClassName("filterDiv");
  if (c === "all") c = "";

  Array.from(elements).forEach((element) => {
    if (element.className.indexOf(c) > -1) {
      element.classList.add("show");
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
      element.classList.remove("show");
    }
  });

  // Force layout refresh for smoother animations
  grid.style.display = "none";
  setTimeout(() => {
    grid.style.display = "grid";
  }, 0);
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}