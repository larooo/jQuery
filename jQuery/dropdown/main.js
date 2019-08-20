let numList = [...document.getElementsByClassName("divMenu")];
let subMenu = [...document.getElementsByClassName("subMenu")];

numList.forEach(x =>
  x.addEventListener("click", function(e) {
    e.stopPropagation();
    let sub = x.querySelector(".subMenu");
    if (sub.classList.contains("show")) {
      sub.classList.remove("show");
    } else {
      subMenu.forEach(y => y.classList.remove("show"));
      sub.classList.add("show");
    }
  })
);
// FRAGE !!!!! without e.stopPropagation();  the next code line doesn't work well
document.addEventListener("click", function(e) {
  subMenu.forEach(x => x.classList.remove("show"));
});

// -----------------------------------

// $(document).ready(function() {
//   $(".divMenu").on("click", function(e) {
//     e.stopPropagation();
//     $(".subMenu").toggleClass("show");
//   });
// });

// $(document).ready(function() {
//   $(".divMenu").each(function(e) {
//     // e.stopPropagation();
//     let sub = $(" .divMenu .subMenu");
//     console.log(sub);

//     if (sub.hasClass("show")) {
//       sub.removeClass("show");
//     } else {
//       sub.addClass("show");
//     }
//   });
// });
