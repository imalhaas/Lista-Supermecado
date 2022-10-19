var items = [];

document.querySelector(`input[type-submit]`)
.addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]').value; 
    var precoProduto = document.querySelector('input[valor=valor_produto]').value;

 
   items.push({
    nome: nomeProduto.value,
    valor: precoProduto.value
   });
   


   let listaProdutos = document.querySelector(`.lista-produtos`);
   let soma = 0;
   listaProdutos.innerHTML= "";
items.map (function(val){
  soma+= parseFloat(val.valor);

listaProdutos.innerHTML+=`
<div class="lista-produto-single">
<h3>`+val.nomeProduto+`</h3>
<h3 class="valor-produto"><span>R$`+val.valor+`</span></h3>
</div>
`;
})
alert(soma);
soma = soma.toFixed(2); 
 nomeProduto.value = "";
 precoProduto.value= "";

 let elementoSoma = document.querySelector('.soma-produto h1');
 elementoSoma.innerHTML = 'R$'+soma;

   
});

document.querySelector(`button [name=Limpar]`)
.addEventListener('click ', ()=>{
itens = [];

document.querySelector(`.lista-produtos`).innerHTML = "";
document.querySelector('.soma-produto h1').innerHTML = "R$0";

})
alert(items[0].nome);