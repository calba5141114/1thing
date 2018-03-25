var title1 = document.getElementById("title1");
var cont = document.getElementById("content");
var body1 = document.getElementById("body1");
var submit = document.getElementById("sub");

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

console.log(items);

itemsShow();

function getForms() {
  writeUserData(title1.value, body1.value);
}


submit.onclick = () => {
  getForms();
  title1.value = " ";
  body1.value = "";
  console.log(items);
  window.location.reload();
};
