const saleClothListData = [
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName: "Quần ngắn nam UA ",
    price: 2095000,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "NIKE",
    saleClothProductName: "Quần ngắn nam NIKE ",
    price: 3484920,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "AIDAS",
    saleClothProductName: "Quần ngắn nam ADIAS ",
    price: 1156700,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "ZARA",
    saleClothProductName: "Quần ngắn nam ZARA",
    price: 1156700,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "PUMA",
    saleClothProductName: "Quần ngắn nam PUMA ",
    price: 2095000,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "JORDAN",
    saleClothProductName: "Quần ngắn nam JORDAN ",
    price: 1156700,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "NEW BALENCE",
    saleClothProductName: "Quần ngắn nam NB",
    price: 1156700,
    promo: 0.2,
  },
  {
    saleClothImage: "./asset/Pant/Q1.webp",
    saleClothBrandName: "SPEEDO",
    saleClothProductName: "Quần ngắn nam SD ",
    price: 2095000,
    promo: 0.2,
  },
];

const initList = () => {
  const initSaleClothList = document.querySelector(
    "#sale-cloth .sale-cloth-area"
  );
  let SaleclothData = "";
  let saleprice = 0;
  for (let i = 0; i < saleClothListData.length; i++) {
    const saleClothElement = saleClothListData[i];
    const {
      saleClothImage,
      saleClothBrandName,
      saleClothProductName,
      price,
      promo,
    } = saleClothElement;
    const currencyPrice = Intl.NumberFormat("en-DE").format(
      saleClothElement.price
    );
    saleprice = Intl.NumberFormat("en-DE").format(
      saleClothElement.price * (1 - saleClothElement.promo)
    );
    const percentPromo = saleClothElement.promo * 100;
    SaleclothData += `
    
    <div class="sale-cloth-section">
    <div class="sale-cloth-list">
    <img src=${saleClothImage} />
    
          <div class="percent"><p>${percentPromo}%</p></div>
          <div class="sale-part1"> <p> VOUCHER 20% </p> </div>
          </div>
          <div class="brand-name">${saleClothBrandName}</div>
          <div class="product-name"> <a href="#product-name"> ${saleClothProductName} </a> </div>
          <div class="product-price"> 
          <span class="product-price-new"> ${saleprice}đ </span>
          <span class = "product-price-old"> ${currencyPrice}đ </span>
          </div>
          </div>
          `;
  }
  initSaleClothList.innerHTML = SaleclothData;
};
initList();

// const calsaleprice = () => {
//   const currentprice = document.querySelector("#sale-cloth .product-price");
//   console.log(document.querySelector("#sale-cloth .product-price"));
//   let salepricelist = "";
//   let saleprice = 0;
//   for (let i = 0; i < saleClothListData.length; i++) {
//     const salePriceElement = saleClothListData[i];
//     saleprice = salePriceElement.price * (1 - salePriceElement.promo);
//     console.log(saleprice);
//     salepricelist += `
//     <span class="product-price-sale"> ${saleprice} </span>
//     `;
//     console.log(salepricelist);
//   }
//   currentprice.innerHTML = salepricelist;
// };
// calsaleprice();
// const a = 132465798;
// console.log(Intl.NumberFormat("en-DE").format(a));
document.querySelector(".email-promo").addEventListener("click",function(event){
  event.preventDefault()
})
const a = document.querySelector(".btn-email-promo").nodeValue;
console.log(a);

