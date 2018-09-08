  var link = document.querySelector(".hotel-search");
  var popup = document.querySelector(".search-form");
  var close = document.querySelector(".hotel-search-close");
  var dateArrival = popup.querySelector(".arrival-departure-form-one");
  var dateDeparture = popup.querySelector(".arrival-departure-form-two");
  var form = popup.querySelector("form");

  link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle(".search-form-show");
   dateArrival.focus();
  // console.log("Клик по кнопке найти гостиницу");
});

  close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("search-form-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму");
});
