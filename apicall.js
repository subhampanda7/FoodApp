// url = "https://www.themealdb.com/api/json/v1/1/random.php"



async function getData(url) {
  try {
    let res = await fetch(url);
    let { meals } = await res.json();
    
    return meals;
  } catch (err) {
    console.log("err:", err);
  }
}

function displayTable(data,container) {
  data.forEach(
    ({ strMeal, strCategory, strArea, strMealThumb, strInstructions }) => {
      const div1 = document.createElement("div");

      const image = document.createElement("img");
      image.src = strMealThumb;

      const name = document.createElement("p");
      name.innerText = `Name - ${strMeal}`;

      const category = document.createElement("p");
      category.innerText = `Category - ${strCategory}`;

      const locality = document.createElement("p");
      locality.innerText = `Food Locality - ${strArea}`;

      const instructions = document.createElement("p");

      instructions.innerText = strInstructions;

      container.append(div1);
      document.getElementById("posthere").append(instructions);
      div1.append(image, name, category, locality);
    }
  );
}

export {getData, displayTable}
