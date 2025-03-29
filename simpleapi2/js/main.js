
document.querySelector('button').addEventListener('click', letsCook)

function letsCook (){
let ingredients = document.querySelector('input').value
fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredients}`)
.then (res => res.json())
.then (data => {
    console.log(data.meals[0]);
    let embed = data.meals[0].strYoutube.replace('watch?v=', 'embed/')
    document.querySelector('h2').innerText = data.meals[0].strMeal
    document.querySelector('iframe').src = embed
    //document.querySelector('h3').innerText = data.meals[0].strInstructions
    
    
})
.catch (error => {
   console.log(`error ${error}`);
    
})
}

//Note to self: how to embed video
//https://www.youtube.com/embed/OfM7VlonD5c?rel=0
//https://www.youtube.com/watch?v=2sX4fCgg-UI
//https://www.youtube.com/embed/2sX4fCgg-UI