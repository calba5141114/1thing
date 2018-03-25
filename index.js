var title1 = document.getElementById("title1");
var cont = document.getElementById("content");
var body1 = document.getElementById("body1");
var submit = document.getElementById("sub");



console.log(items);



function getForms() {
  writeUserData(title1.value, body1.value);
}


submit.onclick = () => {
  getForms();
  title1.value = " ";
  body1.value = "";
  console.log(items);
  itemsShow();
};
