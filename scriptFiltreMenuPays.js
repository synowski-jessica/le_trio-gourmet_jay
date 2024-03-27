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

/*`<div style="display:inline-block;width: 20%; text-align: center;">`*/
//lier le bouton qui permet d'obtenir la recette aléatoire via un click
buttonAmerican.addEventListener("click", () => recettePays("American"));
buttonBritish.addEventListener("click", () => recettePays("British"));
buttonCanadian.addEventListener("click", () => recettePays("Canadian"));
buttonChinese.addEventListener("click", () => recettePays("Chinese"));
buttonCroatian.addEventListener("click", () => recettePays("Croatian"));
buttonDutch.addEventListener("click", () => recettePays("Dutch"));
buttonEgyptian.addEventListener("click", () => recettePays("Egyptian"));
buttonFilipino.addEventListener("click", () => recettePays("Filipino"));
buttonFrench.addEventListener("click", () => recettePays("French"));
buttonGreek.addEventListener("click", () => recettePays("Greek"));
buttonIndian.addEventListener("click", () => recettePays("Indian"));
buttonIrish.addEventListener("click", () => recettePays("Irish"));
buttonItalian.addEventListener("click", () => recettePays("Italian"));
buttonJamaican.addEventListener("click", () => recettePays("Jamaican"));
buttonJapanese.addEventListener("click", () => recettePays("Japanese"));
buttonKenyan.addEventListener("click", () => recettePays("Kenyan"));
buttonMalaysian.addEventListener("click", () => recettePays("Malaysian"));
buttonMexican.addEventListener("click", () => recettePays("Mexican"));
buttonMoroccan.addEventListener("click", () => recettePays("Moroccan"));
buttonPolish.addEventListener("click", () => recettePays("Polish"));
buttonPortuguese.addEventListener("click", () => recettePays("Portuguese"));
buttonRussian.addEventListener("click", () => recettePays("Russian"));
buttonSpanish.addEventListener("click", () => recettePays("Spanish"));
buttonThai.addEventListener("click", () => recettePays("Thai"));
buttonTunisian.addEventListener("click", () => recettePays("Tunisian"));
buttonTurkish.addEventListener("click", () => recettePays("Turkish"));
buttonVietnamese.addEventListener("click", () => recettePays("Vietnamese"));
