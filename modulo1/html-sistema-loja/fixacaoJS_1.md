```JavaScript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let fixo = 2000
let comissao = (100*qtdeCarrosVendidos) + (valorTotalVendas*0.05)
let salario = fixo + comissao

return salario
}
```