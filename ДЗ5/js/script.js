let menuI = document.getElementsByTagName("li"),
    menu = document.getElementsByTagName("ul")[0];
console.log(menuI);
let menuIl = document.createElement("li");
menuIl.classList.add("menu-item");
menuIl.textContent = "Пятый элемент";

menu.insertBefore(menuI[2],menuI[1]);
menu.appendChild(menuIl);
let body = document.getElementsByTagName("body");
body[0].style.background= "url(img/apple_true.jpg)";
let apple = document.getElementsByClassName("title");
apple[0].textContent = "Мы продаем только подлиную технику Apple";
let adv = document.getElementsByClassName("adv");
adv[0].remove();
let promp = document.getElementsByClassName("prompt");
let ans = prompt("Ваше отношение к Apple?",""); 
promp[0].textContent = ans;

