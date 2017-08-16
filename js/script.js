var btnSearchHotel = document.getElementById("search-hotel");
var formSearchHotel = document.getElementById("search-hotel-form-id");


btnSearchHotel.addEventListener("click", function (event) {
  event.preventDefault();
  formSearchHotel.classList.toggle("not-visible");
})  