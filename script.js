/* ===== PEGAR DADOS DA URL ===== */
const params = new URLSearchParams(window.location.search);

const nome = params.get("name") || "Você";
const mensagem = params.get("message") || "Eu gosto muito de você 💖";
const musica = params.get("music");

const imagens = [
  params.get("img1"),
  params.get("img2"),
  params.get("img3")
];

/* ===== COLOCAR TEXTO ===== */
document.getElementById("titulo").innerText =
  nome + ", quer namorar comigo? 💖";

document.getElementById("mensagem").innerText = mensagem;

/* ===== GALERIA DE FOTOS ===== */
const galeria = document.getElementById("galeria");

imagens.forEach(function(img) {
  if (img) {
    const el = document.createElement("img");
    el.src = img;
    galeria.appendChild(el);
  }
});

/* ===== MÚSICA (YOUTUBE) ===== */
if (musica) {
  let embed = musica;

  if (musica.includes("youtu.be")) {
    embed = musica.replace("youtu.be/", "www.youtube.com/embed/");
  }

  if (musica.includes("watch?v=")) {
    embed = musica.replace("watch?v=", "embed/");
  }

  embed = embed.split("&")[0];

  document.getElementById("musica").innerHTML =
    '<iframe width="100%" height="200" src="' + embed + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
}

/* ===== BOTÃO NÃO FUGINDO ===== */
function fugir() {
  const btn = document.querySelector(".nao");

  btn.style.position = "absolute";
  btn.style.top = (Math.random() * 80) + "%";
  btn.style.left = (Math.random() * 80) + "%";
}

/* ===== SALVAR RESPOSTA ===== */
function responder(resp) {
  const data = new Date();

  const registro = {
    resposta: resp,
    data: data.toLocaleDateString(),
    hora: data.toLocaleTimeString()
  };

  localStorage.setItem("pedido", JSON.stringify(registro));

  if (resp === "sim") {
    document.getElementById("respostaFinal").innerText =
      "💖 Agora é oficial 💖";

    soltarCoracoes();
  } else {
    document.getElementById("respostaFinal").innerText =
      "Tudo bem 💛";
  }
}

/* ===== ANIMAÇÃO DE CORAÇÕES ===== */
function soltarCoracoes() {
  for (let i = 0; i < 20; i++) {
    const coracao = document.createElement("div");

    coracao.innerText = "💖";
    coracao.style.position = "fixed";
    coracao.style.left = (Math.random() * 100) + "%";
    coracao.style.top = "100%";
    coracao.style.fontSize = "20px";
    coracao.style.opacity = "0.8";

    document.body.appendChild(coracao);

    setTimeout(function() {
      coracao.style.transition = "3s linear";
      coracao.style.top = "-10%";
    }, 100);

    setTimeout(function() {
      coracao.remove();
    }, 3000);
  }
}
