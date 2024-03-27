let valeur = document.getElementById("valeur") 
let mpMenu= document.getElementById("mpMenu")

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

const MainIngredient = async () => {
    let recherche = document.getElementById("recherche").value;
    if(!gestionDesErreurs(recherche)){
        return;
    };
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

