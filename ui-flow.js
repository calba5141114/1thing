// this app will control how the views appear when a user is logged in vs when they are not logged in.
var noteMakeArea = document.getElementById("getNote");
var cont = document.getElementById("content");

// printing data to content area
function itemsShow() {
  for (var i = 0; i <= items.length ; i++) {
    var blo =
      '<li class="note w-50">' +
      "<h3>" +
      items[i].title +
      "</h3>" +
      "<br>" +
      "<p>" +
      items[i].body +
      "</p>" +
      "</li>" +
      "<br>";

    $(cont).append(blo);
  }
}
