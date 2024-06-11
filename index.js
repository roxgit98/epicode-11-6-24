//esercizio contatore

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

//esercizio stampa nome

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

function cancellaNome() {
  const cancellaDato = localStorage.removeItem("salvato");
  const cancellaStampa = document.getElementById("nomeSalvato");
  cancellaStampa.textContent = "";
}

const elimina = document.getElementById("delete");

elimina.addEventListener("click", cancellaNome);

stampaNome();
