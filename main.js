$(document).ready(() => {

$(".header").on("click", function() {
  $(".content").removeClass("show")
  $(this).find("+ .content").addClass("show")
} )


// USING slideUp/slideDown

// $(".header").on("click", function() {
//   $(".content").slideUp(800)
//   $(this).find("+ .content").slideDown(800)
// } )
})