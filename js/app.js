const searchFood = () => {
    const searchFiled = document.getElementById ('search-filed');
    const searchText = searchFiled.value;
    console.log(searchText);

    searchFiled.value = '';

    if (searchText =='') {
        // alert ='somthing is wrong' ;
    }
  else{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    fetch(url)
    .then (res => res.json())
    .then (data => displaysearchResults(data.meals));
  }
}

const displaysearchResults = meals =>{
    const searchResults = document.getElementById('search-result');

    // searchResults.innerHTML ='';
    searchResults.textContent = '';

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML =` 
        <div onclick="lodeMealDetails(${meal.idMeal})" class="card shadow mb-5 bg-body rounded">
             <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
     </div>
     `;
     searchResults.appendChild(div);
    })

}

const lodeMealDetails = mealId => {
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
 fetch(url)
    .then (res => res.json())
    .then (data => displayMealDetial(data.meals[0]));
}

const displayMealDetial = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div')
        div.classList.add('card');
        div.innerHTML =`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go Youtube</a>
        </div>
        `;
        mealDetails.appendChild(div)
}