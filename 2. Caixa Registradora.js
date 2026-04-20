let maisCaro = 0;
let ultimo;
let soma = 0;
let contagem = 0;
while(true)
{
    ultimo = Number(prompt("Preço do produto: "));
    if (ultimo == -1)
    {
        break;
    } else {
        soma += ultimo
        contagem++
        if(maisCaro < ultimo)
        {
            maisCaro = ultimo;
        }
    }
}
console.log("Produtos: "+contagem+"\nTotal: R$"+soma+ "\nProduto mais caro: R$"+ maisCaro);
