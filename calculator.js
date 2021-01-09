window.addEventListener("load", function(){
  let txtx = document.getElementById("txt-x");
  let txty = document.getElementById("txt-y");
  let btnAdd = document.getElementById("txt-add");
  let txtsum = document.getElementById("txt-sum");

  btnAdd.onclick=function(){
let x = parseInt(txtx.value);
let y = parseInt(txty.value);
txtsum.value=x+y;
  };
});