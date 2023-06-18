let a = prompt("Hãy nhập tham số");
if (a <= 10){for (i=0 ; i < a ; i++){
   let p = document.createElement("p");
   let pText=document.createTextNode("");
   p.appendChild(pText);
   document.getElementById("div").appendChild(p);
   for (y=0 ; y<=i ; y++){
      let span= document.createElement("span");
      let spanText=document.createTextNode(' *');
      span.appendChild(spanText);
      document.getElementById("div").appendChild(span);
   }
   
}
}