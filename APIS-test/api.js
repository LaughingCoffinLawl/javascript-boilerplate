const img = document.querySelector("img");
const button = document.getElementById("button");
const searchbar = document.getElementById("search");

button.addEventListener("click", function () {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=BmXLnhax0SzM8rieJ3YXeAMxKgDw7Vrk&s=" +
      searchbar.value,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (err) {
      console.error("Error: " + err);
      img.src = "/APIS-test/assets/err.jpg";
      img.width = "680";
    });
});
