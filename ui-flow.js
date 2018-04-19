

function setup(item){
  var component =`<li class="note w-50 "><h3>${item.title}</h3><br><p>${item.body}</p></li><br>`;
  return component;
}
// printing data to content area
function itemsShow() {
  var printThis;
  for (var i = 0; i < items.length ; i++) {
  printThis += setup(items[i]);
  }
   return printThis;
}
