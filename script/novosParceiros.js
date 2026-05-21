
emailjs.init("idjx7KWfci3cj0dpz");

const parceirosForm = document.getElementById("parceirosForm");

parceirosForm.addEventListener("submit", async function(e){

  e.preventDefault();

  const botao = parceirosForm.querySelector("button");

  botao.innerText = "Enviando...";
  botao.disabled = true;

  try {

    await emailjs.sendForm(
      "service_uaxzipn",
      "template_6snmou4",
      this
    );

    alert("Formulário enviado com sucesso!");

    parceirosForm.reset();

  } catch(error) {

    console.error(error);

    alert("Erro ao enviar formulário.");

  } finally {

    botao.innerText = "Enviar";
    botao.disabled = false;

  }

});