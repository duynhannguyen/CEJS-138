
const laSoNguyenTo = (a) => {
  if (a === 1){
     return false;
  }else if(a === 2){
     return true;
  }else{
     for(let i = 2; i < a; i++){
        if(a % i === 0){
           return false;
        }
     }
     return true;
  };
};
const cacSoNguyenTo = (a, b) => {
  let tongSoNguyenTo = 0;
  while(a <= b){
     if(laSoNguyenTo(a)){
      tongSoNguyenTo += a;
     };
     a++;
  };
  return tongSoNguyenTo;
};
console.log(cacSoNguyenTo(20, 50));
