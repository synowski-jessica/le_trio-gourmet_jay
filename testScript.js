window.onload = function () {
  var motsClefs = [
    " Apam balik",
    " Apple & Blackberry Crumble",
    " Apple Frangipan Tart",
    " Baingan Bharta",
    " Baked salmon with fennel & tomatoes",
    " Bakewell tart",
    " Banana Pancakes",
    " Bean & Sausage Hotpot",
    " Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
    " Beetroot Soup (Borscht)",
    " Bistek",
    " Blini Pancakes",
    " Boulangère Potatoes",
    " Bread and Butter Pudding",
    " Bread omelette",
    " Breakfast Potatoes",
    " Brie wrapped in prosciutto & brioche",
    " Broccoli & Stilton soup",
    "Bubble & Squeak",
    " Budino Di Ricotta",
    " Burek",
    " Callaloo Jamaican Style",
    " Canadian Butter Tarts",
    " Cashew Ghoriba Biscuits",
    " Chicken Congee",
    " Chicken Couscous",
    " Chicken Karaage",
    " Chicken Marengo",
    " Chinon Apple Tarts",
    " Chivito uruguayo",
    " Chocolate Avocado Mousse",
    " Chocolate Caramel Crispy",
    " Chocolate Gateau",
    " Chocolate Raspberry Brownies",
    " Christmas Pudding Flapjack",
    " Christmas Pudding Trifle",
    " Coddled pork with cider",
    " Corned Beef and Cabbage",
    " Crispy Eggplant",
    " Crispy Sausages and Greens",
    " Croatian Bean Stew",
    " Duck Confit",
    " Egg Drop Soup",
    " Eggplant Adobo",
    " English Breakfast",
    " Eton Mess",
    " Fennel Dauphinoise",
    " Feteer Meshaltet",
    " Fettuccine Alfredo",
    " Fettucine alfredo",
    " Fish Soup (Ukha)",
    " French Lentils With Garlic and Thyme",
    " French Omelette",
    " French Onion Soup",
    " Fresh sardines",
    " Fruit and Cream Cheese Breakfast Pastries",
    " Ful Medames",
    " Full English Breakfast",
    " Garides Saganaki",
    " Gigantes Plaki",
    " Gołąbki (cabbage roll)",
    " Grilled eggplant with coconut milk",
    " Grilled Portuguese sardines",
    " Ham hock colcannon",
    " Home-made Mandazi",
    " Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
    " Honey Teriyaki Salmon",
    " Honey Yogurt Cheesecake",
    " Hot Chocolate Fudge",
    " Jam Roly-Poly",
    " Japanese gohan rice",
    " Japanese Katsudon",
    " Kafteji",
    " Kapsalon",
    " Keleya Zaara",
    " Key Lime Pie",
    " Koshari",
    " Kumpir",
    " Laksa King Prawn Noodles",
    " Lamb and Lemon Souvlaki",
    " Lamb and Potato pie",
    " Lancashire hotpot",
    " Lasagna Sandwiches",
    " Leblebi Soup",
    " Madeira Cake",
    " Mbuzi Choma (Roasted Goat)",
    " Mediterranean Pasta Salad",
    " Mince Pies",
    " Minced Beef Pie",
    " Moroccan Carrot Soup",
    " Moussaka",
    " Mulukhiyah",
    " Mushroom soup with buckwheat",
    " Mustard champ",
    " Nutty Chicken Curry",
    " Pancakes",
    " Parkin Cake",
    " Pate Chinois",
    " Peanut Butter Cheesecake",
    " Peanut Butter Cookies",
    " Pear Tarte Tatin",
    " Pilchard puttanesca",
    " Polskie Naleśniki (Polish Pancakes)",
    " Portuguese barbecued pork (Febras assadas)",
    " Potato Gratin with Chicken",
    " Potato Salad (Olivier Salad)",
    " Poutine",
    " Rappie Pie",
    " Ratatouille",
    " Rock Cakes",
    " Rocky Road Fudge",
    " Rogaliki (Polish Croissant Cookies)",
    " Roti john",
    " Salmon Avocado Salad",
    " Salmon Eggs Eggs Benedict",
    " Seri muka kuih",
    " Shakshuka",
    " Skillet Apple Pork Chops with Roasted Sweet Potatoes & Zucchini",
    " Sledz w Oleju (Polish Herrings)",
    " Spaghetti alla Carbonara",
    " Spanish Tortilla",
    " Spicy Arrabiata Penne",
    " Split Pea Soup",
    " Spotted Dick",
    " Spring onion and prawn empanadas",
    " Squash linguine",
    " Stamppot",
    " Stovetop Eggplant With Harissa, Chickpeas, and Cumin Yogurt",
    " Strawberries Romanoff",
    " Sugar Pie",
    " Summer Pistou",
    " Summer Pudding",
    " Sushi",
    " Sweet and Sour Pork",
    " Tahini Lentils",
    " Tamiya",
    " Tarte Tatin",
    " Teriyaki Chicken Casserole",
    " Timbits",
    " Toad In The Hole",
    " Tonkatsu pork",
    " Tortang Talong",
    " Treacle Tart",
    " Tuna Nicoise",
    " Tunisian Orange Cake",
    " Vegan Chocolate Cake",
    " Vegetarian Chilli",
    " White chocolate creme brulee",
    " Yaki Udon",
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

    for (var i = 0, c = motsClefs.length; i < c; i++) {
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
