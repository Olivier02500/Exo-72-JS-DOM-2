
let name = document.getElementsByTagName('h1');
console.log(name.length)

for (let i = 0; i < name.length; i++){
    name[i].innerHTML = "Hello, je suis ";
}