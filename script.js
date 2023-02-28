// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const menu2 = menu.cloneNode(true);

copy.appendChild(menu2);
console.log(menu2);

// Selecione o primeiro DT da dl de Faq
const firstdt = document.querySelector("dl dt");
console.log(firstdt);

// Selecione o DD referente ao primeiro DT
const firstdd = firstdt.nextElementSibling;
console.log(firstdd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
