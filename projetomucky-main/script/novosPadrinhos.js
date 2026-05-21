emailjs.init("HDi5Ue8owa2rulPYS");

const apadrinhamentoForm = document.getElementById("apadrinhamentoForm");

apadrinhamentoForm.addEventListener("submit", async function(e){
  e.preventDefault();

  const botao = apadrinhamentoForm.querySelector("button");

  botao.innerText = "Enviando...";
  botao.disabled = true;

  try {

    await emailjs.sendForm(
      "service_88kguog",
      "template_1ls93vi",
      this
    );

    alert("Pedido enviado com sucesso!");

    apadrinhamentoForm.reset();

  } catch(error) {

    console.error(error);

    alert("Erro ao enviar pedido.");

  } finally {

    botao.innerText = "Enviar";
    botao.disabled = false;

  }

});

