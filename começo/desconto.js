let produto = "carne";
let preço =  20.00;
let desconto = 0.4;             //        1 = 100%       0 = 0%
let preçoComDesconto = preço * (1 - desconto);
let acrecimo = 2;               //        1 = 100%       0 = 0%
let preçoComAcrecimo = preço * (1 + acrecimo);

/*console.log(preço * (1 - desconto));
console.log(preçoComDesconto);
console.log(preço * ( 1 + acrecimo));
console.log(produto);
*/



console.log("produto:"+ produto + " Preço:R$" + preçoComDesconto)
console.log("produto:"+ produto + " Preço:R$" + preçoComAcrecimo)




