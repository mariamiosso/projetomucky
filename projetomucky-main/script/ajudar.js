function abrirModalAjuda(idModal, titulo) {
  // define o título correto dentro do modal
  if (idModal === "modal") {
    document.getElementById("tituloModal").innerText = titulo;
  } else if (idModal === "modal2") {
    document.getElementById("tituloModal2").innerText = titulo;
  } else if (idModal === "modal3") {
    document.getElementById("tituloModal3").innerText = titulo;
  }

  // mostra o modal
  document.getElementById(idModal).style.display = "flex";
}

function fecharModalAjuda(idModal) {
  document.getElementById(idModal).style.display = "none";
}
