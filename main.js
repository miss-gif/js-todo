let inputBox = document.querySelector("input");
let addBtn = document.getElementById("button");
let resetBtn = document.getElementById("resetBtn");

/**
 * 추가버튼을 누르면
 * 새로고침을 막고
 * ul 안에 li를 생성한다
 * li 안에는 input 값을 넣는다
 *
 * 버튼을 생성한다
 * 버튼 안에는 "X"값을 넣는다
 * 버튼에게 class값으로 "remove-btn"을 넣는다
 * 버튼에게 click이벤트를 넣는다
 * click이벤트 내용은 부모 요소를 지운다
 *
 * li 안에 btn을 추가한다
 * ul 안에 li를 추가한다
 * input 값을 비운다
 * input이 포커스 되게 한다
 */

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = inputBox.value;

  let button = document.createElement("button");
  button.textContent = "X";
  button.classList.add("remove-btn");
  button.addEventListener("click", function (event) {
    event.target.parentNode.remove();
  });
  li.appendChild(button);
  ul.appendChild(li);
  inputBox.value = "";
  inputBox.focus();
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let aa = document.querySelectorAll("li");
  aa.forEach((element) => {
    element.remove();
  });
  inputBox.focus();
});
