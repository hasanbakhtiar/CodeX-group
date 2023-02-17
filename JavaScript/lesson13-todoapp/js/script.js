const input = document.querySelector("input");
const btn = document.querySelector("button");
const ol = document.querySelector("ul");
const listCount = document.querySelector('.listCount');
const todo = () => {
  if (!input.value || input.value.trim().length == 0) {
    alert("please, fill input");
  } else {
    let item = document.createElement("li");
    item.innerHTML = `${input.value}<button class="btn btn-danger  del">del</button>`;
    ol.appendChild(item);
    input.value = "";
    item.setAttribute("class", "list-group-item list-group-item-action d-flex justify-content-between");
    var list = document.querySelectorAll("li");

    for (let index = 0; index < list.length; index++) {
      document.querySelectorAll(".del")[index].onclick = () => {
        list[index].remove();
      };
    listCount.innerHTML = index+1;
    }
  }
};
btn.onclick = todo;
document.querySelector(".clearAll").onclick = () => {
  let list = document.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    list[index].remove();
  }
};

