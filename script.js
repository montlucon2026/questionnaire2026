import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://TON_URL_SUPABASE.supabase.co",
  "TON_SUPABASE_PUBLIC_ANON_KEY"
);

const questions = [
  "Faut-il plus de pistes cyclables à Montluçon ?",
  "Faut-il végétaliser le centre-ville ?",
  "Faut-il rendre les transports en commun gratuits ?",
  "Faut-il plus d'événements culturels ?",
  "Faut-il plus de sécurité dans les quartiers ?",
  "Faut-il développer le télétravail à Montluçon ?",
  "Faut-il plus d'espaces verts ?",
  "Faut-il un centre pour les jeunes ?",
  "Faut-il mieux entretenir les voiries ?",
  "Faut-il renforcer l’aide aux personnes âgées ?",
  "Faut-il créer plus de logements sociaux ?",
  "Faut-il développer le commerce local ?",
  "Faut-il limiter la circulation en centre-ville ?",
  "Faut-il plus d’aires de jeux pour enfants ?",
  "Faut-il davantage de caméras de surveillance ?"
];

let step = 0;
let responses = [];

const container = document.createElement("div");
container.className = "container";
document.getElementById("app").appendChild(container);

const form = document.createElement("form");

const sexeLabel = document.createElement("label");
sexeLabel.textContent = "Sexe (optionnel)";
form.appendChild(sexeLabel);
const sexe = document.createElement("select");
["", "Homme", "Femme", "Préfère ne pas dire"].forEach(opt => {
  const option = document.createElement("option");
  option.value = opt;
  option.textContent = opt;
  sexe.appendChild(option);
});
form.appendChild(sexe);

const ageLabel = document.createElement("label");
ageLabel.textContent = "Âge (optionnel)";
form.appendChild(ageLabel);
const age = document.createElement("input");
age.type = "number";
age.placeholder = "ex: 35";
form.appendChild(age);

const quartierLabel = document.createElement("label");
quartierLabel.textContent = "Quartier (optionnel)";
form.appendChild(quartierLabel);
const quartier = document.createElement("input");
quartier.placeholder = "Nom du quartier";
form.appendChild(quartier);

const questionLabel = document.createElement("label");
questionLabel.id = "questionLabel";
form.appendChild(questionLabel);

const select = document.createElement("select");
["", "Oui", "Non", "Ne se prononce pas"].forEach(opt => {
  const option = document.createElement("option");
  option.value = opt;
  option.textContent = opt;
  select.appendChild(option);
});
form.appendChild(select);

const suggestionLabel = document.createElement("label");
suggestionLabel.textContent = "Autre proposition ? (facultatif)";
form.appendChild(suggestionLabel);
const suggestion = document.createElement("textarea");
suggestion.placeholder = "Écrivez ici vos idées ou remarques...";
form.appendChild(suggestion);

const submit = document.createElement("button");
submit.type = "submit";
submit.textContent = "Valider";
form.appendChild(submit);

const success = document.createElement("div");
success.id = "successMessage";
form.appendChild(success);

container.appendChild(form);

function showQuestion() {
  if (step < questions.length) {
    questionLabel.textContent = questions[step];
    select.value = "";
  } else {
    form.innerHTML = "<h2>Merci pour votre participation !</h2>";
    sendData();
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!select.value) return;

  responses.push({
    question: questions[step],
    reponse: select.value
  });

  step++;
  showQuestion();
});

async function sendData() {
  await supabase.from("reponses").insert([{
    sexe: sexe.value || null,
    age: age.value || null,
    quartier: quartier.value || null,
    suggestion: suggestion.value || null,
    reponses: responses
  }]);
}

showQuestion();
...
