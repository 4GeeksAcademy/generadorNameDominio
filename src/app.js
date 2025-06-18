import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let exts = ['.com', '.es'];

  let dominios = [];

  pronouns.map(pronoun => {
    adjs.map(adj => {
      nouns.map(noun => {
        exts.map(ext => {
          dominios.push(pronoun, adj, noun, ext);
        })
      })
    })
})

dominios.map(dominio => {
  console.log(dominio);
})
};
