const inputBox = document.querySelector("input");
const addBtn = document.getElementById("button");
const resetBtn = document.getElementById("resetBtn");
const list = document.querySelector("ul");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = inputBox.value;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => li.remove());
  li.appendChild(removeBtn);

  list.appendChild(li);
  inputBox.value = "";
  inputBox.focus();
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  list.innerHTML = "";
  inputBox.focus();
});
