//lien avec les div du html
let buttonRandomMeal = document.getElementById("buttonRandomMeal");
let area = document.getElementById("area");
let nameMeal = document.getElementById("nameMeal");
let imageMeal = document.getElementById("imageMeal");
let ingredientMeal = document.getElementById("ingredientMeal");
let instructionMeal = document.getElementById("instructionMeal");
let videoSource = document.getElementById("videoSource");

//fonction qui renvoie une recette aléatoire via l'API
const recetteRandom = async () => {
  console.log("toto");
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`;
  let data = await fetch(requestString);
  console.log("data" + data);
  let response = await data.json();
  console.log("response" + response);
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

//lier le bouton qui permet d'obtenir la recette aléatoire via un click
recetteRandom();
buttonRandomMeal.addEventListener("click", recetteRandom);
