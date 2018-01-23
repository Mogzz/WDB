//Toggle completed class for tasks completed
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete to-do
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

//Add more To Dos
$("input[type='text']").on("keypress", function(e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

//select plus icon and hide or show input
$("h1 i").on("click", function() {
  $("input[type='text']").slideToggle();
  $(this).toggleClass("fa-minus");
});