let valeur = document.getElementById("valeur");
let mpMenu = document.getElementById("mpMenu");

function gestionDesErreurs(x) {
  if (x === "") {
    return;
  }
  if (x === null) {
    return;
  }
  if (typeof x !== "string") {
    return;
  }
  if (x === undefined) {
    return;
  }
}

const MainIngredient = async () => {
  let recherche = document.getElementById("recherche").value;
  // Sauvegarde de la recherche, le 1er est la clé à rappeler pour la
  //réutiliser et la seconde c'est la valeur à stocker dans la clé
  localStorage.setItem("lastSearch", recherche);

  gestionDesErreurs(recherche);
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?i=${recherche}`;
  let data = await fetch(requestString);
  let response = await data.json();
  console.log(response);
  let menuTotal = "";

  for (let i = 0; i < response.meals.length; i++) {
    let imageM = response.meals[i].strMealThumb;
    let nomM = response.meals[i].strMeal;

    console.log(nomM);

    let idMeal = response.meals[i].idMeal;
    menuTotal += `<div id=menuTotalAffichage> 
        <a href="filtreMenuID.html?id=${idMeal}"> <img id="imageIngredientMenu" src="${imageM}" alt="${nomM}" width="150" height="150"></a>; 
        <h3 id="texteH3IngredientMenu"> ${nomM}</h3> 
        </div>`;
    mpMenu.innerHTML = menuTotal;
  }
};

const restoreLastSearch = () => {
  // on récupère la valeur stockée dans le local storage qu'on stocke
  //dans une variable
  const lastSearch = localStorage.getItem("lastSearch");
  if (lastSearch) {
    document.getElementById("recherche").value = lastSearch;
    MainIngredient(); // Réexécute la recherche avec la dernière recherche
  }
};

window.onload = restoreLastSearch; // Restaure la dernière recherche lorsque la page et si le lastSearch contient une valeur alors la valeur s'affichera;

valeur.addEventListener("click", MainIngredient);
