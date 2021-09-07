
const produto1 = 'Carne';
const produto2 = 'Pao';
const produto3 = 'Arroz';

const precoProduto1 = 19.90;
const precoProduto2 = 6.99;
const precoProduto3 = 180.99;

let desconto = 0.15;


var Carne = 'produto: ' + produto1 + '  ' + 'preço:R$ ' + precoProduto1;
var Pao = 'produto: ' + produto2 + '  ' + 'preço:R$ ' + precoProduto2;
var Arroz = 'produto: ' + produto3 + '  ' + 'preço:R$ ' + precoProduto3;

const lista = [Carne, Pao, Arroz];

console.log(lista);

var carrinho = precoProduto1 + precoProduto2 + precoProduto3;
console.log(carrinho);
var descontoFinal = (carrinho * (1-desconto));



if(carrinho > 100){
 console.log(descontoFinal) 
}
else {
    console.log(carrinho)

}





