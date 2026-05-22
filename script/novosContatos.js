emailjs.init("idjx7KWfci3cj0dpz");

const contatoForm = document.getElementById("contatoForm");

contatoForm.addEventListener("submit", async function(e){

  e.preventDefault();

  const botao = contatoForm.querySelector("button");

  botao.innerText = "Enviando...";
  botao.disabled = true;

  try {

    await emailjs.sendForm(
      "service_uaxzipn",
      "template_zyb8oq9",
      this
    );

    alert("Mensagem enviada com sucesso!");

    contatoForm.reset();

  } catch(error) {

    console.error(error);

    alert("Erro ao enviar mensagem.");

  } finally {

    botao.innerText = "Enviar";
    botao.disabled = false;

  }

});