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
