// url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

async function getData() {
  try {
    let query = document.getElementById("reciepe").value;
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    let { meals } = await res.json();
    console.log("data:", meals);
    if (meals == null) {
      alert(`Not Found ${query} Food In Data Base`);
    } else {
      displayTable(meals);
    }
  } catch (err) {
    console.log("err:", err);
  }
}

function displayTable(data) {
  document.querySelector("#contains").innerHTML = "";
  data.forEach(({ strMeal, strCategory, strArea, strMealThumb }) => {
    const div = document.createElement("div");

    const image = document.createElement("img");
    image.src = strMealThumb;

    const name = document.createElement("p");
    name.innerText = `Name - ${strMeal}`;

    const category = document.createElement("p");
    category.innerText = `Category - ${strCategory}`;

    const locality = document.createElement("p");
    locality.innerText = `Food Locality - ${strArea}`;

    document.getElementById("contains").append(div);
    div.append(image, name, category, locality);
  });
}
