// const a = document.getElementById("theh1");
// console.log(a);
// a.innerHTML = "chao buoi sang";
// a.style.color = "blue";
// const b = document.getElementsByClassName("span-body");
// console.log(b);
// const c = document.getElementsByTagName("div");

// console.log(c);
// const listcard = document.getElementById("listcard");
// console.log(listcard);
let newListCard = "";
for (let i = 0; i <= 3; i++) {
  newListCard += `<div class="card" style="width: 18rem">
    <img
      src="https://placehold.co/600x400"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 id="theh5" class="card-title">Card title ${i}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
}
// console.log(newListCard);
listcard.innerHTML = newListCard;
listcard.className;
console.log(listcard.className);
theh1.className;
console.log(theh1.className);
thespan1.classList.add("abc");
