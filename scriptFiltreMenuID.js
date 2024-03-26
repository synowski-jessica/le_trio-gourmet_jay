const params = new URLSearchParams(window.location.search);
const idRecette = params.get("id");
let area = document.getElementById("area");
let nameMeal = document.getElementById("nameMeal");
let imageMeal = document.getElementById("imageMeal");
let ingredientMeal = document.getElementById("ingredientMeal");
let instructionMeal = document.getElementById("instructionMeal");
let videoSource = document.getElementById("videoSource");
let buttonBack = document.getElementById("imageRetour");

// Fonction pour afficher les détails de la recette
const afficherDetails = async (idRecette) => {
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/lookup.php?i=${idRecette}`;
  console.log(requestString);
  let data = await fetch(requestString);
  let response = await data.json();

  let normalLink;
  let videoId = "";

  //permet de récupérer 1 nom de recette aléatoire
  nameMeal.textContent = response.meals[0].strMeal;

  //permet de récupérer le pays de la recette aléatoire
  area.textContent = response.meals[0].strArea;

  //permet de récupérer la photo de la recette aléatoire
  imageMeal.src = response.meals[0].strMealThumb;

  //permet de récupérer les instructions pour pouvoir faire la recette aléatoire
  instructionMeal.textContent = response.meals[0].strInstructions;

  //code qui permet de récupérer la vidéo youtube
  normalLink = response.meals[0].strYoutube;
  if (normalLink.includes("youtube.com/watch?v=")) {
    videoId = normalLink.split("youtube.com/watch?v=")[1];
  } else if (normalLink.includes("youtu.be/")) {
    videoId = normalLink.split("youtu.be/")[1];
  }
  if (videoId.includes("&")) {
    videoId = videoId.split("&")[0];
  }
  videoSource.src = `https://www.youtube.com/embed/${videoId}`;

  //boucle qui permet de parcourir les 20 champs d'ingrédients et mesures et n'afficher que les champs où il y a du texte
  let ingredientList = "";

  console.log("avant boucle for");
  for (let i = 1; i <= 20; i++) {
    let ingredient = response.meals[0][`strIngredient${i}`];
    let measure = response.meals[0][`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientList += `๑ ${measure} ${ingredient}<br>`;
    }
  }
  ingredientMeal.innerHTML = ingredientList;
  console.log(ingredientList);
};
afficherDetails(idRecette);

buttonBack.addEventListener("click", function () {
  window.history.back();
});
