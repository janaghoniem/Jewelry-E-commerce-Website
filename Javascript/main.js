// function dropMenu() {
//     var x = document.getElementById("navigation");
//     if (x.className === "navigation") {
//       x.className += " responsive";
//     } else {
//       x.className = "navigation";
//     }
//   }
// function dropMenu() {
//   var x = document.querySelector(".navigation");
//   if (x.classList.contains("responsive")) {
//       x.classList.remove("responsive");
//   } else {
//       x.classList.add("responsive");
//   }
// }
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left=value *1.5+'px';
    hill4.style.left=value *-1.5+'px';
    hill1.style.top=value *1+'px';

})


let imgWrappers = document.getElementsByClassName('img-wrapper faster');
window.addEventListener('scroll', () => {
    let value = window.scrollX;
    for (let i = 0; i < imgWrappers.length; i++) {
        imgWrappers[i].style.right = value * 1.5 + 'px';
    }
})
