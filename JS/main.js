document.addEventListener("DOMContentLoaded", () => {
  const btnModo = document.getElementById("btn-modo");

  if (!btnModo) return;

  btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");
  });
});
