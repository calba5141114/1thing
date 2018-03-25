
  var items = [];
  var cont = document.getElementById("content");
  // connecting and creating an instance of the database.
  var database = firebase.database();
  var fireRef = database.ref("notes/");
  // items array init
  var title1 = document.getElementById("title1");
  var body1 = document.getElementById("body1");
  var submit = document.getElementById("sub");

