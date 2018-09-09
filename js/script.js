  var link = document.querySelector(".hotel-search");
  var popup = document.querySelector(".search-form");
  var close = document.querySelector(".hotel-search-close");

  link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle(".search-form-show");
});

  close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.toggle("search-form-show");
});
