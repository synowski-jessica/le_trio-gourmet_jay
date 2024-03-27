
let area = document.getElementById("area");
let nameMeal = document.getElementById("nameMeal");
let imageMeal = document.getElementById("imageMeal");
let ingredientMeal = document.getElementById("ingredientMeal");
let instructionMeal = document.getElementById("instructionMeal");
let videoSource = document.getElementById("videoSource")
let validateNom= document.getElementById("validateNom")


window.onload = function () {
  var motsClefs = [
    "Apam balik",
    "Apple & Blackberry Crumble",
    "Apple Frangipan Tart",
    "Baingan Bharta",
    "Baked salmon with fennel & tomatoes",
    "Bakewell tart",
    "Banana Pancakes",
    "Bean & Sausage Hotpot",
    "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    "Beetroot Soup (Borscht)",
    "Bistek",
    "Blini Pancakes",
    "Boulangère Potatoes",
    "Bread and Butter Pudding",
    "Bread omelette",
    "Breakfast Potatoes",
    "Brie wrapped in prosciutto & brioche",
    "Broccoli & Stilton soup",
    "Bubble & Squeak",
    "Budino Di Ricotta",
    "Burek",
    "Callaloo Jamaican Style",
    "Canadian Butter Tarts",
    "Cashew Ghoriba Biscuits",
    "Chicken Congee",
    "Chicken Couscous",
    "Chicken Karaage",
    "Chicken Marengo",
    "Chinon Apple Tarts",
    "Chivito uruguayo",
    "Chocolate Avocado Mousse",
    "Chocolate Caramel Crispy",
    "Chocolate Gateau",
    "Chocolate Raspberry Brownies",
    "Christmas Pudding Flapjack",
    "Christmas Pudding Trifle",
    "Coddled pork with cider",
    "Corned Beef and Cabbage",
    "Crispy Eggplant",
    "Crispy Sausages and Greens",
    "Croatian Bean Stew",
    "Duck Confit",
    "Egg Drop Soup",
    "Eggplant Adobo",
    "English Breakfast",
    "Eton Mess",
    "Fennel Dauphinoise",
    "Feteer Meshaltet",
    "Fettuccine Alfredo",
    "Fettucine alfredo",
    "Fish Soup (Ukha)",
    "French Lentils With Garlic and Thyme",
    "French Omelette",
    "French Onion Soup",
    "Fresh sardines",
    "Fruit and Cream Cheese Breakfast Pastries",
    "Ful Medames",
    "Full English Breakfast",
    "Garides Saganaki",
    "Gigantes Plaki",
    "Gołąbki (cabbage roll)",
    "Grilled eggplant with coconut milk",
    "Grilled Portuguese sardines",
    "Ham hock colcannon",
    "Home-made Mandazi",
    "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
    "Honey Teriyaki Salmon",
    "Honey Yogurt Cheesecake",
    "Hot Chocolate Fudge",
    "Jam Roly-Poly",
    "Japanese gohan rice",
    "Japanese Katsudon",
    "Kafteji",
    "Kapsalon",
    "Keleya Zaara",
    "Key Lime Pie",
    "Koshari",
    "Kumpir",
    "Laksa King Prawn Noodles",
    "Lamb and Lemon Souvlaki",
    "Lamb and Potato pie",
    "Lancashire hotpot",
    "Lasagna Sandwiches",
    "Leblebi Soup",
    "Madeira Cake",
    "Mbuzi Choma (Roasted Goat)",
    "Mediterranean Pasta Salad",
    "Mince Pies",
    "Minced Beef Pie",
    "Moroccan Carrot Soup",
    "Moussaka",
    "Mulukhiyah",
    "Mushroom soup with buckwheat",
    "Mustard champ",
    "Nutty Chicken Curry",
    "Pancakes",
    "Parkin Cake",
    "Pate Chinois",
    "Peanut Butter Cheesecake",
    "Peanut Butter Cookies",
    "Pear Tarte Tatin",
    "Pilchard puttanesca",
    "Polskie Naleśniki (Polish Pancakes)",
    "Portuguese barbecued pork (Febras assadas)",
    "Potato Gratin with Chicken",
    "Potato Salad (Olivier Salad)",
    "Poutine",
    "Rappie Pie",
    "Ratatouille",
    "Rock Cakes",
    "Rocky Road Fudge",
    "Rogaliki (Polish Croissant Cookies)",
    "Roti john",
    "Salmon Avocado Salad",
    "Salmon Eggs Eggs Benedict",
    "Seri muka kuih",
    "Shakshuka",
    "Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
    "Sledz w Oleju (Polish Herrings)",
    "Spaghetti alla Carbonara",
    "Spanish Tortilla",
    "Spicy Arrabiata Penne",
    "Split Pea Soup",
    "Spotted Dick",
    "Spring onion and prawn empanadas",
    "Squash linguine",
    "Stamppot",
    "Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
    "Strawberries Romanoff",
    "Sugar Pie",
    "Summer Pistou",
    "Summer Pudding",
    "Sushi",
    "Sweet and Sour Pork",
    "Tahini Lentils",
    "Tamiya",
    "Tarte Tatin",
    "Teriyaki Chicken Casserole",
    "Timbits",
    "Toad In The Hole",
    "Tonkatsu pork",
    "Tortang Talong",
    "Treacle Tart",
    "Tuna Nicoise",
    "Tunisian Orange Cake",
    "Vegan Chocolate Cake",
    "Vegetarian Chilli",
    "White chocolate creme brulee",
    "Yaki Udon"
  ];

  var form = document.getElementById("auto-suggest");
  var input = form.search;

  var list = document.createElement("ul");
  list.className = "suggestions";
  list.style.display = "none";

  form.appendChild(list);

  input.onkeyup = function () {
    var txt = this.value;
    if (!txt) {
      list.style.display = "none";
      return;
    }

    var suggestions = 0;
    var frag = document.createDocumentFragment();
    console.log(motsClefs.length)

    for (var i = 0, c = motsClefs.length; i < c; i++) {
      console.log(txt);
      console.log( motsClefs[i])
      if (new RegExp("^" + txt, "i").test(motsClefs[i])) {
        
        var word = document.createElement("li");
        frag.appendChild(word);
        word.innerHTML = motsClefs[i].replace(
          new RegExp("^(" + txt + ")", "i"),
          "<strong>$1</strong>"
        );
        word.mot = motsClefs[i];
        word.onmousedown = function () {
          input.focus();
          input.value = this.mot;
          list.style.display = "none";
          return false;
        };
        suggestions++;
      }
    }

    if (suggestions) {
      list.innerHTML = "";
      list.appendChild(frag);
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  };

  input.onblur = function () {
    list.style.display = "none";
    if (this.value == "") this.value = "Rechercher...";
  };
};



function gestionDesErreurs(x){
    if (x.trim() ===""){
        alert("Veuillez saisir quelque chose dans la barre de recherche")
        return
    }
    if(x === null || x=== undefined){
        alert("La valeur saisie est invalide!")
        return
    }
    if(typeof(x)!== "string"){
        alert("La valeur saisie doit etre une chaine de caracteres")
        return
    }
    return true
}

const menuNom = async () => {
  let recherche = document.getElementById("search").value;
  console.log(recherche);
  if(!gestionDesErreurs(recherche)){
      return;
  };
  const apiKey = "1";
  let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/search.php?s=${recherche}`;
  let data = await fetch(requestString);
  let response = await data.json();
  console.log(response);
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
}
//menuNom()
validateNom.addEventListener("click",menuNom)