let buttonRandomMeal = document.getElementById("buttonRandomMeal");
let area = document.getElementById("area");
let areaImage = document.getElementById("areaImage");
let nameMeal = document.getElementById("nameMeal");
let imageMeal = document.getElementById("imageMeal");
let ingredientMeal = document.getElementById("ingredientMeal");
let instructionMeal = document.getElementById("instructionMeal");
let videoSource = document.getElementById("videoSource");

const recetteRandom = async () => {
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/random.php`;
  let data = await fetch(requestString);
  let response = await data.json();
  let normalLink;
  let videoId = "";
  console.log(response);
  nameMeal.textContent = response.meals[0].strMeal;
  area.textContent = response.meals[0].strArea;
  imageMeal.src = response.meals[0].strMealThumb;
  instructionMeal.textContent = response.meals[0].strInstructions;
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

  let ingredientList = "";
  for (let i = 1; i <= 20; i++) {
    let ingredient = response.meals[0][`strIngredient${i}`];
    let measure = response.meals[0][`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientList += `${measure} ${ingredient}<br>`;
    }
  }
  ingredientMeal.innerHTML = ingredientList;
  console.log(ingredientList);
};
buttonRandomMeal.addEventListener("click", recetteRandom);

/*const categorie = async () => {
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
  let data1 = await fetch(requestString);
  let response1 = await data1.json();
  console.log(response1);
};
categorie();*/
