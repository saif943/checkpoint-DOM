// declration des variables
let btnPlus = document.querySelectorAll(".qt-plus");
let qte = document.querySelectorAll(".qt");
let PriceToShow = document.querySelectorAll(".full-price")
let Price = document.querySelectorAll(".price")
// evenets
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", () => {
    qte[i].innerHTML++;
    PriceToShow[i].innerHTML = Number(parseFloat(PriceToShow[i].innerHTML)) + Number(parseFloat(Price[i].innerHTML));
    PriceToShow[i].innerHTML=Number.parseFloat(PriceToShow[i].innerHTML).toFixed(2)+" €"; 
    somme()
});
}
let btnMinus = document.querySelectorAll(".qt-minus");
// evenets
for (let i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", () => {
    if (qte[i].innerHTML > 1) {
        qte[i].innerHTML--;
        
        PriceToShow[i].innerHTML = Number(parseFloat(PriceToShow[i].innerHTML)) - Number(parseFloat(Price[i].innerHTML));
        PriceToShow[i].innerHTML=Number.parseFloat(PriceToShow[i].innerHTML).toFixed(2)+" €";  } 
        somme()
  });
}
let Hearts= document.querySelectorAll(".hearts");
for (let i=0; i<Hearts.length; i++) {
  Hearts[i].addEventListener("click",()=> {
if (Hearts[i].style.color==="grey") {
  Hearts[i].style.color="red";
  //console.log(Hearts[i].style.color)
}else {
  Hearts[i].style.color="grey";
  //console.log(Hearts[i].style.color)

}
  });
}
//let TOTAL=document.getElementsByClassName(".total2");

function somme(){
  var sum=0;
   let aa =  (document.querySelectorAll(".full-price"));
  //  console.log(aa)
  for (let i=0; i<aa.length; i++) {
      // console.log(aa[i].innerHTML.slice(0,aa[i].innerHTML.length-1))
    sum+=Number(aa[i].innerHTML.slice(0,aa[i].innerHTML.length-1))
  }

  console.log("a",document.getElementById("total2").innerHTML)
  document.getElementById("total2").innerHTML = sum;

}
let btnRemove=document.querySelectorAll('.Btn_remove');
 for (let i=0;i<btnRemove.length;i++) {
  btnRemove[i].addEventListener("click",()=> {
    btnRemove[i].parentElement.parentElement.parentElement.remove()
    somme()
 })
}