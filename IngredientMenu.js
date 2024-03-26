let valeur = document.getElementById("valeur") 
let mpMenu= document.getElementById("mpMenu")

function gestionDesErreurs(x){
    if (x ===""){
        return
    }
    if(x === null){
        return
    }
    if(typeof(x)!== "string"){
        return 
    }
    if(x === undefined){
        return
    }
}

const MainIngredient = async () => {
    let recherche = document.getElementById("recherche").value;
    gestionDesErreurs(recherche);
    const apiKey = "1";
    let requestString = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?i=${recherche}`;
    let data = await fetch(requestString);
    let response = await data.json();
    console.log(response);
    let menuTotal="";

    for (let i=0; i<response.meals.length; i++){
        let imageM=response.meals[i].strMealThumb;
        let nomM=response.meals[i].strMeal;
        menuTotal+=
        `<div id=menuTotalAffichage> 
        <img id="imagePaysMenu" src="${imageM}" alt="${nomM}" width="150" height="150"> 
        <h3 id="texteH3PaysMenu"> ${nomM}</h3> 
        </div>`
        mpMenu.innerHTML=menuTotal;
        console.log(menuTotal);
    }
}
//MainIngredient()
valeur.addEventListener("click", MainIngredient);

