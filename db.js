// connecting and creating an instance of the database.
var database = firebase.database();
var fireRef = database.ref("notes/");

// creating item object
function Item(title, body) {
  this.title = title;
  this.body = body;
}

// creates and pushes object to items[] array
function pusher(title, body) {
  item = new Item(title, body);
  items.push(item);
}

// writing user input data to the cloud
function writeUserData(title, body) {
  fireRef.push().set({
    title_note: title,
    body_note: body
  });
}


