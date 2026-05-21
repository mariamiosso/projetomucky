function irParaAjuda() {
  window.location.href = "ajudar.html";
}

function showChat() {
  document.getElementById("chatbot").classList.toggle('show')
}


function gerarResposta(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("doar")) {
    const respostas = [
      "Você pode ajudar na página 'Faça parte' ",
      "Temos várias formas de doação, veja em 'Como ajudar' ",
      "Toda contribuição faz diferença! Confira a área de doações "
    ];
    return respostas[Math.floor(Math.random() * respostas.length)];
  }

  if (msg.includes("animal")) {
    const respostas = [
      "Nós cuidamos de primatas resgatados 🐒",
      "O Projeto Mucky protege e cuida de macacos em situação de risco ",
      "Aqui os animais recebem carinho e cuidados especiais "
    ];
    return respostas[Math.floor(Math.random() * respostas.length)];
  }

 
  const respostasPadrao = [
    "Obrigado por apoiar ",
    "Sua ajuda é muito importante ",
    "Estamos felizes com seu interesse "
  ];
  return respostasPadrao[Math.floor(Math.random() * respostasPadrao.length)];
}

const ID_session = Math.random(); 

const WEBHOOK_URL = "https://mariateste.app.n8n.cloud/webhook/chatbot";

async function enviar(e) {
  if (e.key !== "Enter") return;

  const input = document.getElementById("input");
  const messages = document.getElementById("messages");


  let msg = input.value.trim();

  if (msg === "") return;

  adicionarMensagem(msg, "user");

  input.value = "";

  const typing = adicionarTyping();

  try {

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mensagem: msg, 
        id: ID_session
      })
    });

    if (!response.ok) {
      throw new Error("Erro no servidor");
    }

    const data = await response.json();
    console.log(data)

    typing.remove();

    adicionarMensagem(
      data.output || "Não consegui responder no momento.",
      "bot"
    );

  } catch (error) {

    typing.remove();

    adicionarMensagem(
      "Desculpe, ocorreu um erro ao conectar com o assistente.",
      "bot"
    );

    console.error(error);
  }
}

function adicionarMensagem(texto, tipo) {

  const messages = document.getElementById("messages");

  const div = document.createElement("div");

  div.className = `message ${tipo}`;

  div.innerText = texto;

  messages.appendChild(div);

  messages.scrollTop = messages.scrollHeight;
}

function adicionarTyping() {

  const messages = document.getElementById("messages");

  const typing = document.createElement("div");

  typing.className = "message bot";

  typing.innerText = "Digitando...";

  messages.appendChild(typing);

  messages.scrollTop = messages.scrollHeight;

  return typing;
}