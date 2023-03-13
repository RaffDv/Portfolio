document.querySelector("#nav").addEventListener("click", function ind(e) {
  let target = e.target.href.split("#");
  target = target.pop();

  document.querySelector(`#${target}`).classList.add("indicator");

  setTimeout(() => {
    document.querySelector(`#${target}`).classList.remove("indicator");
  }, 2000);
});
