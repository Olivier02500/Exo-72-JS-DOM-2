
let card = document.getElementsByClassName('name-tag');

for (let i = 0; i < card.length; i++){
    let add = document.createElement('p');
    add.innerHTML = "HELLO WORLD !"
    card[i].appendChild(add);
}