// let divisor = 0;
// for(let i = 0;i <= 15;i++){
//     if(15 % i === 0){
//         // console.log(i);
//         // divisor = divisor + i;
//         // divisor = divisor +=1
//         divisor = divisor + 1
//     }
// }
// console.log(divisor);

let csDienCu = 50;
    csDienMoi = 400;                                    
    if(csDienMoi-csDienCu <= 50 && csDienCu <= csDienMoi ){
        tienDienThangNay = (csDienMoi - csDienCu)*1243 
        console.log("Tiền điện tháng này phải trả:",tienDienThangNay);
    }
    else if (csDienMoi-csDienCu <= 100 && csDienCu <= csDienMoi){
        tienDienThangNay = (csDienMoi - csDienCu)*1304
        console.log("Tiền điện tháng này phải trả:",tienDienThangNay);  
    }
    else if (csDienMoi-csDienCu <= 150 && csDienCu <= csDienMoi){
        tienDienThangNay = (csDienMoi - csDienCu)*1644
        console.log("Tiền điện tháng này phải trả:",tienDienThangNay);  
    }
    else if (csDienMoi-csDienCu <= 200 && csDienCu <= csDienMoi){
        tienDienThangNay = (csDienMoi - csDienCu)*1806
        console.log("Tiền điện tháng này phải trả:",tienDienThangNay);  
    }
    else if (csDienMoi-csDienCu <= 250 && csDienCu <= csDienMoi){
        tienDienThangNay = (csDienMoi - csDienCu)*1976
        console.log("Tiền điện tháng này phải trả:",tienDienThangNay);  
    }
    else {
        tienDienThangNay = (csDienMoi - csDienCu)*2297
        console.log("Tiền điện tháng này phải trả:",tienDienThangNay);  
    }    
