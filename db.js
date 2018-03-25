
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

function getForms() {
  writeUserData(title1.value, body1.value);
}

var query = firebase
  .database()
  .ref("notes/")
  .orderByKey();
query.once("value").then(function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    var key = childSnapshot.key;
    // childData will be the actual contents of the child
    var childData = childSnapshot.val();
    var titl = childData.title_note;
    var bod = childData.body_note;
    pusher(titl, bod);
  });
});
