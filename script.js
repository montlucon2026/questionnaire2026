document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "Faut-il plus de pistes cyclables à Montluçon ?",
    "Faut-il végétaliser le centre-ville ?",
    "Faut-il rendre les transports en commun gratuits ?",
    "Faut-il organiser plus d'événements culturels ?",
    "Faut-il développer les énergies renouvelables ?",
    "Faut-il plus de lieux pour les jeunes ?",
    "Faut-il investir dans les écoles ?",
    "Faut-il créer plus d’espaces verts ?",
    "Faut-il renforcer la sécurité ?",
    "Faut-il soutenir les commerces locaux ?",
    "Faut-il plus de parkings en centre-ville ?",
    "Faut-il un marché bio hebdomadaire ?",
    "Faut-il améliorer les trottoirs et routes ?",
    "Faut-il encourager les logements écologiques ?",
    "Faut-il développer les activités sportives ?"
  ];

  const container = document.getElementById("questionsContainer");

  questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "question";

    const label = document.createElement("label");
    label.textContent = q;

    const select = document.createElement("select");
    select.name = `question${index + 1}`;
    ["", "Oui", "Non", "Sans avis"].forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value === "" ? "-- Choisir une réponse --" : value;
      select.appendChild(option);
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    container.appendChild(wrapper);
  });
});

