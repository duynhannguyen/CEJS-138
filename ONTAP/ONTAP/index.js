const servicesProductImg = [
  { img: '<img src="./asset/plumbing.png" alt="1" />' },
  { img: '<img src="./asset/bicycle.png" alt="2" />' },
  { img: '<img src="./asset/handyman.png" alt="3" />' },
  { img: '<img src="./asset/electric.png" alt="4" />' },
  { img: '<img src="./asset/cleaning.png" alt="5" />' },
  { img: '<img src="./asset/moving.png" alt="6" />' },
  { img: '<img src="./asset/yard.png" alt="7" />' },
  { img: '<img src="./asset/trush.png" alt="8 " />' },
];
const servicesProduct = () => {
  const servicesProductPostion = document.querySelector(".services-products");
  const initServicesProduct = servicesProductImg.map(
    (servicesProductImgItem) => {
      const { img } = servicesProductImgItem;
      return `<div class="services-product-1">
    ${img}
  </div>`;
    }
  );
  console.log(initServicesProduct);
  servicesProductPostion.innerHTML = initServicesProduct.join("");
};
servicesProduct();
const testymonialsCommentList = ["", "", "", ""];
const testymonialsComment = () => {
  const testymonialsCommentPosition = document.querySelector(
    ".tesytymonials-comments"
  );
  const initTestymonialsComment = testymonialsCommentList.map(() => {
    return `
      <div class="tesytymonials-comments-item">
        <div class="tesytymonials-comments-name">Kathryn Murphy</div>
        <div class="tesytymonials-comments-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled
        </div>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      `;
  });
  console.log(initTestymonialsComment);
  testymonialsCommentPosition.innerHTML = initTestymonialsComment.join("");
};
testymonialsComment();
