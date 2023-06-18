const saleClothListData = [
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HQ6351-1_110x110@2x.jpg?v=1677470404",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HQ6351-2_110x110@2x.jpg?v=1677470405",
    saleClothBrandName: "ADIDAS",
    saleClothProductName: "Giày Thể Thao Nam Adidas Ultraboost Light ",
    price: 5200000,
    saleprice: 4160000,
    promo: 0.2,
    alt: "Giày adidas",
    id: "sale1",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/u574wo2-1_110x110@2x.jpg?v=1676623703",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/u574wo2-2_110x110@2x.jpg?v=1676623702",
    saleClothBrandName: "NEW BALANCE",
    saleClothProductName: "Giày Thể Thao Unisex New Balance Classic 574  ",
    price: 2295000,
    saleprice: 1836000,
    promo: 0.2,
    alt: "Giày new balance",
    id: "sale2",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3025798-003-1_110x110@2x.jpg?v=1673336294",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/3025798-003-2_110x110@2x.jpg?v=1673336294",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName: "Giày Chạy Bộ Nam Under Armour HOVR Machina 3 Storm",
    price: 3276000,
    saleprice: 2620000,
    promo: 0.2,
    alt: "Giày under armour",
    id: "sale3",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/DA8535-102-1_110x110@2x.jpg?v=1675075030",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/DA8535-102-2_110x110@2x.jpg?v=1675075030",
    saleClothBrandName: "NIKE",
    saleClothProductName: "Giày Chạy Bộ Nam Nike Air Zoom Structure 24 ",
    price: 3719000,
    saleprice: 2975000,
    promo: 0.2,
    alt: "Giày nike",
    id: "sale4",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/u574lggl-1_110x110@2x.jpg?v=1676623921",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/u574lggl-2_110x110@2x.jpg?v=1676623921",
    saleClothBrandName: "NEW BALANCE",
    saleClothProductName: "Giày Thể Thao Unisex New Balance 574 Legacy ",
    price: 3695000,
    saleprice: 2956000,
    promo: 0.2,
    alt: "Giày new balance",
    id: "sale5",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/u9060ecb-1_110x110@2x.jpg?v=1676623744",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/u9060ecb-2_110x110@2x.jpg?v=1676623744",
    saleClothBrandName: "NEW BALANCE",
    saleClothProductName: "Giày Thể Thao Unisex New Balance Shifted 90/60",
    price: 4095000,
    saleprice: 3276000,
    promo: 0.2,
    alt: "Giày new balance",
    id: "sale6",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1123194-HMBC-1_110x110@2x.jpg?v=1676373901",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1123194-HMBC-2_110x110@2x.jpg?v=1676373903",
    saleClothBrandName: "HOKA",
    saleClothProductName: "Giày Chạy Thể Thao Nam Hoka Arahi 6 ",
    price: 3199000,
    saleprice: 2559000,
    promo: 0.2,
    alt: "Giày hoka",
    id: "sale7",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HP5771-1_110x110@2x.jpg?v=1677470373",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HP5771-3_110x110@2x.jpg?v=1677470372",
    saleClothBrandName: "ADIDAS",
    saleClothProductName: "Giày Thể Thao Nam Adidas Ultrabounce ",
    price: 2400000,
    saleprice: 1920000,
    promo: 0.2,
    alt: "Giày adidas",
    id: "sale8",
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
      saleClothImage2,
      alt,
      saleClothBrandName,
      saleClothProductName,
      price,
      promo,
      id,
    } = saleClothElement;
    const currencyPrice = Intl.NumberFormat("en-US").format(
      saleClothElement.price
    );
    saleprice = Intl.NumberFormat("en-US").format(saleClothElement.saleprice);
    const percentPromo = saleClothElement.promo * 100;
    SaleclothData += `
    <div class="sale-cloth-section">
          <div class="sale-cloth-list">
            <div class="product-img">
              <div class="front-img">
              <img src=${saleClothImage} alt=${alt} />
            </div>
            <div class="back-img">
              <img src=${saleClothImage2} alt=${alt}>
            </div>
            </div>

            <div class="percent"><p>${percentPromo}%</p></div>
            <div class="sale-part1"> <div> VOUCHER 20% </div> </div>
          </div>
          <div class="brand-name">${saleClothBrandName}</div>
          <div class="product-name"> <a href="#"> ${saleClothProductName} </a> </div>
          <div class="product-price">
            <span class="product-price-new"> ${saleprice}đ </span>
          <span class = "product-price-old"> ${currencyPrice}đ </span>
          </div>
          <div class="btn-pay" onclick="addProductToCartSale('${id}')">MUA NGAY</div>
        </div>
    `;
    // `
    // <div class="sale-cloth-section">
    // <div class="sale-cloth-list">
    // <img src=${saleClothImage} />

    //       <div class="percent"><p>${percentPromo}%</p></div>
    //       <div class="sale-part1"> <p> VOUCHER 20% </p> </div>
    //       </div>
    //       <div class="brand-name">${saleClothBrandName}</div>
    //       <div class="product-name"> <a href="#product-name"> ${saleClothProductName} </a> </div>
    //       <div class="product-price">
    //       <span class="product-price-new"> ${saleprice}đ </span>
    //       <span class = "product-price-old"> ${currencyPrice}đ </span>
    //       </div>
    //       </div>
    //       `;
    // console.log(SaleclothData);
  }
  initSaleClothList.innerHTML = SaleclothData;
};
initList();

function submitEmail() {
  const inputEle = document.querySelector("#email-promo");
  const email = inputEle.value;
  inputEle.value = "";
  alert(
    `Bạn đã đăng ký thành công ${email}, các chương trình khuyến mãi mới nhất sẽ được gửi đến bạn`
  );
}
// -----------------SPORT-NEWS-------------------------//
const sportNews = [
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/kanye-yeezy-adidas-partnership-960x640.jpg",
    sportTitle: "Adidas Sắp Công Bố Mở Bán Yeezy Trở Lại",
    sportLink: "https:snkrvn.com/adidas-sap-cong-bo-mo-ban-yeezy-tro-lai",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/Snapinsta.app_343284813_903432290960261_7197727670071961905_n_1080-960x640.jpg",
    sportTitle: "Air Jordan 1 KO Low “Shadow” Và “Kentucky” Chuẩn Bị Lên Kệ",
    sportLink:
      "https://snkrvn.com/air-jordan-1-ko-low-shadow-va-kentucky-chuan-bi-len-ke/",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/collage-2-960x640.jpg",
    sportTitle: "Những Khoảnh Khắc Viral Nhất Của Met Gala 2023",
    sportLink:
      "https://snkrvn.com/nhung-khoanh-khac-viral-nhat-cua-met-gala-2023/",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/supreme-coogi-spring-2023-collaboration-release-info-010.jpeg",
    sportTitle: "BST Supreme x COOGI 2023 Chuẩn Bị Được Lên Kệ",
    sportLink:
      "https://snkrvn.com/bst-supreme-x-coogi-2023-chuan-bi-duoc-len-ke/",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2020/10/sean-wotherspoon-guess-farmers-market.jpg",
    sportTitle: "Sean Wotherspoon: Ông hoàng của chất liệu corduroy",
    sportLink:
      "https://snkrvn.com/sean-wotherspoon-ong-hoang-cua-chat-lieu-corduroy/",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/04/https___hypebeast.com_image_2023_04_louis-vuitton-pharrell-something-in-the-water-collaboration-collection-capsule-release-info-14-960x640.jpg",
    sportTitle:
      "Louis Vuitton Tung BST Giới Hạn Mới Cùng Lễ Hội Something in the Water Của Pharrell Williams",
    sportLink:
      "https://snkrvn.com/louis-vuitton-tung-bst-gioi-han-moi-cung-le-hoi-something-in-the-water-cua-pharrell-williams/",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/05/calvin-klein-jennie-kim-blackpink-limited-edition-capsule-collection-001-960x640.jpeg",
    sportTitle: "Calvin Klein Chuẩn Bị Ra Mắt BST Mới Cùng Jennie BLACKPINK",
    sportLink:
      "https://snkrvn.com/calvin-klein-chuan-bi-ra-mat-bst-moi-cung-jennie-blackpink/",
  },
  {
    sportImg:
      "https://snkrvn.sgp1.digitaloceanspaces.com/wp-content/uploads/2023/04/collage-5-960x640.jpg",
    sportTitle:
      "Những Hình Ảnh Đầu Tiên Của DJ Clark Kent x Nike Air Force 1 Low “The List”",
    sportLink:
      "https://snkrvn.com/nhung-hinh-anh-dau-tien-cua-dj-clark-kent-x-nike-air-force-1-low-the-list/",
  },
];
const sportNewsInfor = document.querySelector(".sport-news .sport-news-list");
// console.log(sportNewsInfor);
let initSportList = "";
let SportPic = [];
const sportNewsList = () => {
  for (let i = 0; i < sportNews.length; i++) {
    const sportNewsEle = sportNews[i];
    const { sportImg, sportTitle, sportLink } = sportNewsEle;
    initSportList += `<li class="sport-news-item">
    
    <a href=${sportLink} target="_blank"><img src=${sportImg}></a>
    <a href=${sportLink} target="_blank">${sportTitle}</a>
  </li>`;
    // console.log(initSportList);
    SportPic.push(sportImg);
  }
  sportNewsInfor.innerHTML = initSportList;
};
sportNewsList();
// -----------------END SPORT-NEWS-------------------------//
// ----------------- POLO FOR MEM--------------------------//
const menPoloListData = [
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/1377366-100-1_1080x.jpg?v=1683197576",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/files/1377366-100-2_1080x.jpg?v=1683197576",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName: "Áo Polo Nam Under Armour Isochill ",
    price: 2395000,
    promo: 0.2,
    alt: "Áo Polo UNDER ARMOUR",
    id: "MP1",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/10024739-A03-1_1080x.jpg?v=1679481719",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/10024739-A03-2_1080x.jpg?v=1679481719",
    saleClothBrandName: "CONVERSE",
    saleClothProductName: "Áo Polo Nam Converse Ss Polo Shirt",
    price: 850000,
    promo: 0.2,
    alt: "Áo Polo CONVERSE",
    id: "MP2",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1768702350-1_1080x.jpg?v=1679911429",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1768702350-3_1080x.jpg?v=1679911428",
    saleClothBrandName: "COLUMBIA",
    saleClothProductName: "Áo Thun Polo Nam Columbia Tech Trail",
    price: 990000,
    promo: 0.2,
    alt: "Áo Polo COLUMBIA",
    id: "MP3",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HS3279-1_1080x.jpg?v=1676889401",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HS3279-2_1080x.jpg?v=1676889402",
    saleClothBrandName: "ADIDAS",
    saleClothProductName: "Áo Polo Nam Adidas Club ",
    price: 850000,
    promo: 0.2,
    alt: "Áo Polo ADIDAS",
    id: "MP4",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/58667476-1_1080x.jpg?v=1667451056",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/58667476-3_1080x.jpg?v=1667451056",
    saleClothBrandName: "PUMA",
    saleClothProductName: "Áo Polo Nam Puma Ess Pique ",
    price: 999000,
    promo: 0.2,
    alt: "Áo Polo ADIDAS",
    id: "MP5",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1366249-001-1_1080x.jpg?v=1637138416",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1366249-001-2_1080x.jpg?v=1637138416",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName: "Áo Polo Tay Ngắn Nam Under Armour Iso-Chill Feather",
    price: 2495000,
    promo: 0.2,
    alt: "Áo Polo UNDER ARMOUR",
    id: "MP6",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1366255-100-3_1080x.jpg?v=1637138425",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1366255-100-4_1080x.jpg?v=1637138425",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName:
      "Áo Tay Ngắn Nam Under Armour Curry Course Banned Polo",
    price: 1247000,
    promo: 0.2,
    alt: "Áo Polo UNDER ARMOUR",
    id: "MP7",
  },
  {
    saleClothImage:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aab086768e3840098facaf25016e97d8_9366/Ao_Polo_Golf_Luoi_In_Hoa_trai_cam_HS1130_21_model.jpg",
    saleClothImage2:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/06a20bb0878e4921a160af25016ce243_9366/Ao_Polo_Golf_Luoi_In_Hoa_trai_cam_HS1130_23_hover_model.jpg",
    saleClothBrandName: "ADIDAS",
    saleClothProductName: "Áo Polo Tay ngắn nam Lưới in hoa",
    price: 1700000,
    promo: 0.2,
    alt: "Áo Polo ADIDAS",
    id: "MP8",
  },
];

const initMenPolo = () => {
  const initSaleClothList = document.querySelector(
    "#men-polo-cloth .sale-cloth-area"
  );
  let SaleclothData = "";
  for (let i = 0; i < menPoloListData.length; i++) {
    const saleClothElement = menPoloListData[i];
    const {
      saleClothImage,
      saleClothImage2,
      alt,
      saleClothBrandName,
      saleClothProductName,
      price,
      promo,
      id,
    } = saleClothElement;
    const currencyPrice = Intl.NumberFormat("en-US").format(
      saleClothElement.price
    );
    saleprice = Intl.NumberFormat("en-DE").format(
      saleClothElement.price * (1 - saleClothElement.promo)
    );
    const percentPromo = saleClothElement.promo * 100;
    SaleclothData += `
    <div class="sale-cloth-section">
          <div class="sale-cloth-list">
            <div class="product-img">
              <div class="front-img">
              <img src=${saleClothImage} alt=${alt} />
            </div>
            <div class="back-img">
              <img src=${saleClothImage2} alt=${alt}>
            </div>
            </div>

            
          </div>
          <div class="brand-name">${saleClothBrandName}</div>
          <div class="product-name"> <a href="#"> ${saleClothProductName} </a> </div>
          <div class="product-price">
          <span class = "product-price-old-men-polo"> ${currencyPrice}đ </span>
          </div>
          <div class="btn-pay" onclick="addProductToCart('${id}')">MUA NGAY</div>
        </div>
    `;
  }
  initSaleClothList.innerHTML = SaleclothData;
};
initMenPolo();
// ----------------- END POLO FOR MEM--------------------------//
// ----------------- GEAR FOR FEMALE --------------------------//
const gearForMaleListData = [
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1361033-433-1_1080x.jpg?v=1674034953",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1361033-433-2_1080x.jpg?v=1674034952",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName: "Áo Ngực Thể Thao Nữ Under Armour Crossback ",
    price: 870000,
    promo: 0.2,
    alt: "Đồ Tập Nữ Under Armour",
    id: "GF1",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/awb11034bk-1_f7eb1484-5e98-4e01-b028-74ca14f58f54_1080x.jpg?v=1673499273",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/awb11034bk-2_c5f6dbcc-9ab7-4697-b73d-e1cec184a0dd_1080x.jpg?v=1673499272",
    saleClothBrandName: "NEW BALANCE",
    saleClothProductName: "Áo Ngực Thể Thao Nữ New Balance Pace 3.0",
    price: 795000,
    promo: 0.2,
    alt: "Đồ Tập Nữ New Balance",
    id: "GF2",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/FW2VTF1016F-DML-1_1080x.jpg?v=1678878401",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/FW2VTF1016F-DML-2_1080x.jpg?v=1678878401",
    saleClothBrandName: "FILA",
    saleClothProductName: "Áo Bra Tập Luyện Nữ Fila Logo Sport",
    price: 895000,
    promo: 0.2,
    alt: "Đồ Tập Nữ Fila",
    id: "GF3",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/IC8005-1_1080x.jpg?v=1676975896",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/IC8005-2_1080x.jpg?v=1676975897",
    saleClothBrandName: "ADIDAS",
    saleClothProductName: "Áo Tập Nữ Adidas Run Pkt",
    price: 850000,
    promo: 0.2,
    alt: "Đồ Tập Nữ ADIDAS",
    id: "GF4",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1351994-001-1_1080x.jpg?v=1636973872",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1351994-001-2_1080x.jpg?v=1636973872",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName: "Áo Ngực Thể Thao Nữ Under Armour Infinity High",
    price: 1695000,
    promo: 0.2,
    alt: "Đồ Tập Nữ Under Armour",
    id: "GF5",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/FW2VTF1028F-BLK-1_1080x.jpg?v=1678186855",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/FW2VTF1028F-BLK-2_1080x.jpg?v=1678186854",
    saleClothBrandName: "FILA",
    saleClothProductName: "Áo Polo Tay Ngắn Nam Under Armour Iso-Chill Feather",
    price: 895000,
    promo: 0.2,
    alt: "Đồ Tập Nữ Fila",
    id: "GF6",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1370062-824-1_1080x.jpg?v=1653893347",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/1370062-824-2_1080x.jpg?v=1653893347",
    saleClothBrandName: "UNDER ARMOUR",
    saleClothProductName:
      "Áo Ngực Thể Thao Nữ Under Armour Infinity Mid Bra Blocked",
    price: 1247000,
    promo: 0.2,
    alt: "Đồ Tập Nữ Under Armour",
    id: "GF7",
  },
  {
    saleClothImage:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HS7260-1_1080x.jpg?v=1678789814",
    saleClothImage2:
      "https://cdn.shopify.com/s/files/1/0456/5070/6581/products/HS7260-2_1080x.jpg?v=1678789814",
    saleClothBrandName: "ADIDAS",
    saleClothProductName:
      "Áo Tập Nữ Adidas High Support Luxe Tailored Impact Training",
    price: 1800000,
    promo: 0.2,
    alt: "Đồ Tập Nữ ADIDAS",
    id: "GF8",
  },
];
const initGearForMale = () => {
  const initSaleClothList = document.querySelector(
    "#gear-for-female .sale-cloth-area"
  );
  let SaleclothData = "";
  let saleprice = 0;
  for (let i = 0; i < gearForMaleListData.length; i++) {
    const saleClothElement = gearForMaleListData[i];
    const {
      saleClothImage,
      saleClothImage2,
      alt,
      saleClothBrandName,
      saleClothProductName,
      price,
      promo,
      id,
    } = saleClothElement;
    const currencyPrice = Intl.NumberFormat("en-US").format(
      saleClothElement.price
    );
    saleprice = Intl.NumberFormat("en-DE").format(
      saleClothElement.price * (1 - saleClothElement.promo)
    );
    const percentPromo = saleClothElement.promo * 100;
    SaleclothData += `
    <div class="sale-cloth-section">
          <div class="sale-cloth-list">
            <div class="product-img">
              <div class="front-img">
              <img src=${saleClothImage} alt=${alt} />
            </div>
            <div class="back-img">
              <img src=${saleClothImage2} alt=${alt}>
            </div>
            </div>
          </div>
          <div class="brand-name">${saleClothBrandName}</div>
          <div class="product-name"> <a href="#"> ${saleClothProductName} </a> </div>
          <div class="product-price">
          <span class = "product-price-old-men-polo"> ${currencyPrice}đ </span>
          </div>
          <div class="btn-pay" onclick="addProductToCartGF('${id}')">MUA NGAY</div>
        </div>
    `;
  }
  initSaleClothList.innerHTML = SaleclothData;
};
initGearForMale();
const addProductToCartGF = (string) => {
  const selectedProduct = gearForMaleListData.find(
    (product) => product.id === string
  );
  const ProductInCartIndex = cart.findIndex(
    (cartItem) => cartItem.id === string
  );
  if (ProductInCartIndex !== -1) {
    cart[ProductInCartIndex].quantity += 1;
  } else {
    selectedProduct.quantity = 1;
    cart.push(selectedProduct);
  }
  initcart();
};
// ----------------- END GEAR FOR FEMALE --------------------------//

let cart = [];
// ---------------------------------------------------------cart polo men-----------------------------------------//
const addProductToCart = (string) => {
  const selectedProduct = menPoloListData.find(
    (product) => product.id === string
  );
  const ProductInCartIndex = cart.findIndex(
    (cartItem) => cartItem.id === string
  );
  if (ProductInCartIndex !== -1) {
    cart[ProductInCartIndex].quantity += 1;
  } else {
    selectedProduct.quantity = 1;
    cart.push(selectedProduct);
  }
  initcart();
};
// --------------------------------------------------------- end cart polo men-----------------------------------------//
// ---------------------------------------------------------cart sale 20%-----------------------------------------//
const addProductToCartSale = (string) => {
  const selectedProduct = saleClothListData.find(
    (product) => product.id === string
  );
  const ProductInCartIndex = cart.findIndex(
    (cartItem) => cartItem.id === string
  );
  if (ProductInCartIndex !== -1) {
    cart[ProductInCartIndex].quantity += 1;
  } else {
    selectedProduct.quantity = 1;
    cart.push(selectedProduct);
  }
  console.log(cart);
  initcartsale();
};

// ---------------------------------------------------------cart sale 20%-----------------------------------------//
// ---------------------------------------------------------innit cart sale---------------------------------------//
const initcartsale = () => {
  const cartpostion = document.querySelector(".cart .cart-content");
  const cartBodyItem = cart.map((cartItem) => {
    const {
      saleClothImage,
      saleClothBrandName,
      saleClothProductName,
      price,
      quantity,
      alt,
      id,
      saleprice,
    } = cartItem;
    return `
    <div class="cart-content-container" id="deleted-child">
    <div class="cart-img">
                <img src=${saleClothImage} alt=${alt}>
              </div>
              <div class="cart-detail">
                <div class="cart-brand">${saleClothBrandName}
                </div>
                <div class="cart-name">${saleClothProductName}</div>
                <div class="cart-price">${saleprice}đ</div>
                <div class="cart-quantity">
                <label for="quantity"></label>
                <input type="number" class="cart-quantity-input" value="${quantity}" >
                <div class="btn-remove"  >REMOVE</div>
              </div>
              </div>
              </div>
    `;
  });
  cartpostion.innerHTML = cartBodyItem.join("");
  const InputQuantity = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < InputQuantity.length; i++) {
    const inputQuantityEle = InputQuantity[i];
    inputQuantityEle.addEventListener("change", function (event) {
      const input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      cartTotal();
    });
    cartTotal();
  }
  removeItemInCart();

  // quantityChanged();
};
// ---------------------------------------------------------end innit cart sale---------------------------------------//
// addProductToCart();
const initcart = () => {
  const cartpostion = document.querySelector(".cart .cart-content");
  const cartBodyItem = cart.map((cartItem) => {
    const {
      saleClothImage,
      saleClothBrandName,
      saleClothProductName,
      price,
      quantity,
      alt,
      id,
    } = cartItem;
    return `
    <div class="cart-content-container" id="deleted-child">
    <div class="cart-img">
                <img src=${saleClothImage} alt=${alt}>
              </div>
              <div class="cart-detail">
                <div class="cart-brand">${saleClothBrandName}
                </div>
                <div class="cart-name">${saleClothProductName}</div>
                <div class="cart-price">${price}đ</div>
                <div class="cart-quantity">
                <label for="quantity"></label>
                <input type="number" class="cart-quantity-input" value="${quantity}" >
                <div class="btn-remove"  >REMOVE</div>
              </div>
              </div>
              </div>
    `;
  });
  console.log(cartBodyItem);
  cartpostion.innerHTML = cartBodyItem.join("");
  const InputQuantity = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < InputQuantity.length; i++) {
    const inputQuantityEle = InputQuantity[i];
    inputQuantityEle.addEventListener("change", function (event) {
      const input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      cartTotal();
    });
    cartTotal();
  }
  removeItemInCart();

  // quantityChanged();
};
// initcart();
const cartTotal = () => {
  const cartContent = document.getElementsByClassName("cart-content")[0];
  // console.log(cartContent);
  const cartContainner = cartContent.getElementsByClassName(
    "cart-content-container"
  );
  // console.log(cartContainner);
  let Carttotal = 0;
  for (let i = 0; i < cartContainner.length; i++) {
    const cartContainnerEle = cartContainner[i];
    const PriceEle = cartContainnerEle.getElementsByClassName("cart-price")[0];
    // console.log(PriceEle);
    const QuantityEle = cartContainnerEle.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    // console.log(QuantityEle);
    const price = PriceEle.innerHTML.replace("đ", "");
    // console.log( "kiểu dữ liệu của price:", typeof price);
    // console.log(+price);
    const quantity = QuantityEle.value;
    // console.log("kiểu dữ liệu của quantity:", typeof quantity );
    // console.log(+quantity);
    Carttotal += +price * +quantity;
    // console.log(Carttotal)
  }
  document.getElementsByClassName("totalNumber")[0].innerHTML =
    Intl.NumberFormat("en-US").format(Carttotal) + "đ";

  // const cartTotalPosition = document.querySelector(".totalNumber");
  // // console.log(cartTotalPosition);
  // const priceInCart = document.querySelector(".cart-price").
  // console.log(priceInCart);
  // const quantityInCart = document.querySelector(".cart-quantity-input");
  // const quantityValue = quantityInCart.value
  // console.log(quantityValue);
  // const updatePriceQuantity = quantityInCart * quantityValue;
  // console.log(updatePriceQuantity);
  //   let  updatePriceQuantityFinal = 0 ;
  //   for(let i = 0; i<cart.length ;i++){
  //   const carttotal = cart[i].price;
  //   const carttotalquatity = cart[i].quantity
  //   // const quantityInCart = document.querySelector(".cart-quantity-input");
  //   // const quantityValue = quantityInCart.value
  //   const updatePriceQuantity = carttotal * carttotalquatity;
  //   updatePriceQuantityFinal += updatePriceQuantity
  // }
  // cartTotalPosition.innerHTML = Intl.NumberFormat("en-DE").format(updatePriceQuantityFinal)  + 'đ'
  // if(cart.length-1){
  //   for(let i = 0; i<cart.length ;i++){
  //     RemovecartItemPrice = cart[i].price;
  //     RemovecartItemQuantity = cart[i].quantity;
  //     const totalAfterRemove = RemovecartItemPrice * RemovecartItemQuantity
  //     updatePriceQuantityFinal = RemovecartItemPrice * RemovecartItemQuantity
  //   }
  // }

  // console.log(priceInCartItem);
  // cartTotalPosition.innerHTML = Intl.NumberFormat("en-DE").format(totalNumber) + "đ";
};

// -------------------------------------REMOVE BUTTON-----------------------------------//
const removeItemInCart = () => {
  const btnList = document.getElementsByClassName("btn-remove");
  console.log(btnList);
  for (let i = 0; i < btnList.length; i++) {
    const btnListEle = btnList[i];
    btnListEle.addEventListener("click", function (event) {
      const buttonClicked = event.target 
      buttonClicked.parentElement.parentElement.parentElement.remove();
      cartTotal();
    });
  }
};

// --------------------------------------------------------END REMOVE BUTTON---------------------------------------------------------//
// --------------------------------------------------------PURCHEASE---------------------------------------------------------//
const purchase = () => {
  alert(
    "Bạn đã thanh toán thành công, đừng quên đăng ký email để nhận các chương trình khuyễn mãi mới nhất"
  );
  let purchaseEle = document.getElementsByClassName("cart-content")[0];
  while (purchaseEle.hasChildNodes()) {
    purchaseEle.removeChild(purchaseEle.firstChild);
    cartTotal();
    for (let i = 0; i < cart.length; i++) {
      cart.pop(i);
    }
  }
};
// -------------------------------------------------------- END PURCHEASE---------------------------------------------------------//
