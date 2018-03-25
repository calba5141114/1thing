var cont = document.getElementById("content");

// printing data to content area
function itemsShow() {
  for (var i = 0; i < items.length + 1 ; i++) {
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
