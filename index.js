let contatore = sessionStorage.getItem("counter") || 0;

function incrementa() {
  contatore++;
  document.getElementById("timer").textContent = contatore;
  sessionStorage.setItem("counter", contatore);
}

const incrementaEStampa = () => {
  incrementa();
};

const intervallo = setInterval(incrementaEStampa, 1000);

document.getElementById("timer").textContent = contatore;

function salva() {
  const nome = document.getElementById("testo").value;
  localStorage.setItem("salvato", nome);
}
const inviato = document.getElementById("send");

inviato.addEventListener("click", salva);

function stampaNome() {
  const nomeSalvato = document.getElementById("nomeSalvato");
  const prendiNome = localStorage.getItem("salvato");
  nomeSalvato.textContent = prendiNome;
}

stampaNome();
