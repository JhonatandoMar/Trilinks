document.addEventListener("scroll", function() {
  if (document.documentElement.scrollTop > 80) {
    document.querySelector(".header_cima").classList.add("header-onScroll");
  //   document.querySelector(".container-fluid").classList.add("menu-icon-onScroll");
  } else {
    document.querySelector(".header_cima").classList.remove("header-onScroll");
  //   document.querySelector(".container-fluid").classList.remove("menu-icon-onScroll");
  }
});