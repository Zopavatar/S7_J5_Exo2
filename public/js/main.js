let exo1 = document.getElementsByTagName("div")[0].firstElementChild;
console.log(exo1);


let exo2 = document.getElementsByTagName("h3")[1];
console.log(exo2);


let exo3 = document.getElementsByTagName("h3")[1-1];
console.log(exo3);


let exo4 = document.getElementsByTagName("p")[1];
console.log(exo4.nextElementSibling);


let exo5 = document.getElementsByTagName("li")[0].parentElement;
console.log(exo5);


let exo6 = document.getElementsByTagName("ul")[0].parentElement.firstElementChild;
console.log(exo6);


let exo7 = document.getElementsByTagName("li")[3].parentElement.children[3+1];
console.log(exo7);


let exo8 = document.getElementsByTagName("p")[3].parentElement.children[4+2];
console.log(exo8);


let exo9 = document.getElementsByTagName("span")[1].parentElement.nextElementSibling;
console.log(exo9);


let exo10 = document.getElementsByTagName("b")[1].parentElement.parentElement.nextElementSibling.getElementsByTagName("b")[0];
console.log(exo10);

let exo11 = document.querySelector(".grandParagraphe");
console.log(exo11);


let exo12 = document.getElementsByTagName("li");

for (i = 0; i < exo12.length; i++){
    console.log(exo12[i]);
}