
submit.onclick = () => {
  getForms();
  title1.value = " ";
  body1.value = "";
  console.log(items);
  $('#gem').css('visibility','visible');
  $('#getNote').remove();
  $('#mids').remove();
  itemsShow();
};

