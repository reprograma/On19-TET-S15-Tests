/*const somaCompras = (livroSelecionado, taxaEntrega) => {
    return livroSelecionado + taxaEntrega;
  };

  const estoque = (livroEstoque, livroSelecionado) => {
    return livroEstoque - livroSelecionado;
  };*/
  
const desconto = (preco, desconto) =>{
    const precoComDesconto = preco*(100- desconto)/100;
    return precoComDesconto;
};

const teste = (titulo, esperado, retornado) => {
    if(esperado ===retornado) {
        console.log(` ${titulo} deu certo :)`);
    }else {
        console.log(`${titulo} deu ruim :(`);
    }
}
teste("somaCompras", 15, somaCompras(7 ,8));
teste("estoque", 99, estoque(100 , 1));
teste("desconto", 80, desconto(100, 20));