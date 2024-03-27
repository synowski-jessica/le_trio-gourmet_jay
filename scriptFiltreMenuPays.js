//lien avec les div du html
let menuListePays = document.getElementById("affichageRecettePaysSelectionne");
let buttonAmerican = document.getElementById("button-american");
let buttonBritish = document.getElementById("button-british");
let buttonCanadian = document.getElementById("button-canadian");
let buttonChinese = document.getElementById("button-chinese");
let buttonCroatian = document.getElementById("button-croatian");
let buttonDutch = document.getElementById("button-dutch");
let buttonEgyptian = document.getElementById("button-egyptian");
let buttonFilipino = document.getElementById("button-filipino");
let buttonFrench = document.getElementById("button-french");
let buttonGreek = document.getElementById("button-greek");
let buttonIndian = document.getElementById("button-indian");
let buttonIrish = document.getElementById("button-irish");
let buttonItalian = document.getElementById("button-italian");
let buttonJamaican = document.getElementById("button-jamaican");
let buttonJapanese = document.getElementById("button-japanese");
let buttonKenyan = document.getElementById("button-kenyan");
let buttonMalaysian = document.getElementById("button-malaysian");
let buttonMexican = document.getElementById("button-mexican");
let buttonMoroccan = document.getElementById("button-moroccan");
let buttonPolish = document.getElementById("button-polish");
let buttonPortuguese = document.getElementById("button-portuguese");
let buttonRussian = document.getElementById("button-russian");
let buttonSpanish = document.getElementById("button-spanish");
let buttonThai = document.getElementById("button-thai");
let buttonTunisian = document.getElementById("button-tunisian");
let buttonTurkish = document.getElementById("button-turkish");
let buttonVietnamese = document.getElementById("button-vietnamese");

// JavaScript pour afficher les étiquettes de drapeaux lors du survol
const flags = document.querySelectorAll(".flag-container");
flags.forEach((flag) => {
  const label = flag.querySelector(".flag-label");
  flag.addEventListener("mouseover", () => {
    label.style.display = "block";
  });
  flag.addEventListener("mouseout", () => {
    label.style.display = "none";
  });
});

//fonction qui renvoie une recette aléatoire via l'API
const recettePays = async (pays) => {
  window.history.pushState("", "", `filtrePaysMenu.html?country=${pays}`);
  let namePays = pays;
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?a=${namePays}`;
  console.log(requestString);
  let data = await fetch(requestString);
  console.log(data);
  let response = await data.json();
  console.log(response);

  //boucle qui permet de parcourir les 20 champs d'ingrédients et mesures et n'afficher que les champs où il y a du texte
  let tableauMeals = response.meals;
  let menuTotal = "";

  for (let i = 0; i <= tableauMeals.length; i++) {
    let imageM = response.meals[i].strMealThumb;
    let nomM = response.meals[i].strMeal;
    let idM = response.meals[i].idMeal;

    menuTotal +=
      `<div id=menuTotalAffichage>` +
      `<a href="filtreMenuID.html?id=${idM}"><img id="imagePaysMenu" src="${imageM}" alt="${nomM}" width="150" height="150"></a>` +
      `<h3 id="texteH3PaysMenu"> ${nomM}</h3>` +
      `</div>`;

    menuListePays.innerHTML = menuTotal;
  }
};

const params = new URLSearchParams(window.location.search);
const nameCountry = params.get("country");
console.log(nameCountry);

if (nameCountry != null) {
  recettePays(nameCountry);
}

//lier le bouton qui permet d'obtenir la recette aléatoire via un click
buttonAmerican.addEventListener("click", () => gestionClicPays("American"));
buttonBritish.addEventListener("click", () => gestionClicPays("British"));
buttonCanadian.addEventListener("click", () => gestionClicPays("Canadian"));
buttonChinese.addEventListener("click", () => gestionClicPays("Chinese"));
buttonCroatian.addEventListener("click", () => gestionClicPays("Croatian"));
buttonDutch.addEventListener("click", () => gestionClicPays("Dutch"));
buttonEgyptian.addEventListener("click", () => gestionClicPays("Egyptian"));
buttonFilipino.addEventListener("click", () => gestionClicPays("Filipino"));
buttonFrench.addEventListener("click", () => gestionClicPays("French"));
buttonGreek.addEventListener("click", () => gestionClicPays("Greek"));
buttonIndian.addEventListener("click", () => gestionClicPays("Indian"));
buttonIrish.addEventListener("click", () => gestionClicPays("Irish"));
buttonItalian.addEventListener("click", () => gestionClicPays("Italian"));
buttonJamaican.addEventListener("click", () => gestionClicPays("Jamaican"));
buttonJapanese.addEventListener("click", () => gestionClicPays("Japanese"));
buttonKenyan.addEventListener("click", () => gestionClicPays("Kenyan"));
buttonMalaysian.addEventListener("click", () => gestionClicPays("Malaysian"));
buttonMexican.addEventListener("click", () => gestionClicPays("Mexican"));
buttonMoroccan.addEventListener("click", () => gestionClicPays("Moroccan"));
buttonPolish.addEventListener("click", () => gestionClicPays("Polish"));
buttonPortuguese.addEventListener("click", () => gestionClicPays("Portuguese"));
buttonRussian.addEventListener("click", () => gestionClicPays("Russian"));
buttonSpanish.addEventListener("click", () => gestionClicPays("Spanish"));
buttonThai.addEventListener("click", () => gestionClicPays("Thai"));
buttonTunisian.addEventListener("click", () => gestionClicPays("Tunisian"));
buttonTurkish.addEventListener("click", () => gestionClicPays("Turkish"));
buttonVietnamese.addEventListener("click", () => gestionClicPays("Vietnamese"));

// Fonction pour afficher le pays sélectionné
function afficherPaysSelectionne(pays) {
  // Sélectionner l'élément HTML où afficher le pays sélectionné
  let affichageRecettePaysSelectionne = document.getElementById(
    "affichagePaysSelectionne"
  );
  // Mettre à jour le contenu de l'élément avec le pays sélectionné
  affichageRecettePaysSelectionne.textContent = "Selected country : " + pays;
}

// Fonction pour gérer le clic sur les boutons de pays
function gestionClicPays(pays) {
  recettePays(pays); // Appeler la fonction pour récupérer et afficher les recettes du pays sélectionné
  afficherPaysSelectionne(pays); // Appeler la fonction pour afficher le pays sélectionné
}

// Vérifier s'il y a un pays dans l'URL et l'afficher
const params2 = new URLSearchParams(window.location.search);
const nameCountry2 = params2.get("country");
if (nameCountry2 != null) {
  afficherPaysSelectionne(nameCountry2);
}
