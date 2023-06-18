let parent = document.getElementsByClassName('parent')[0];
let child1 = document.getElementsByClassName('child1')[0];
console.log(child1);
child1.addEventListener('click', function(){
    child1.remove()
});
let child2 = document.getElementsByClassName('child2')[0];
console.log(child2);
child2.addEventListener('click', function(){
    child2.remove()
});
let child3 = document.getElementsByClassName('child3')[0];
console.log(child3);
child3.addEventListener('click', function(){
    child3.remove()
});