const produto1 = {
    nome:"moto G9 Pro",
    descricao:"celular +ou- bom",
    preco: 999.99,
    tamanho:"200GB",
}
console.log(produto1);

class produto{
    nome = '';
    descricao = '';
    preco = 0.0;
    tamanho = '';
    foto = '';
    calcularSubTotal(quantidade) {
        return this.preco * quantidade;
    }
}

const produto2 = {
    nome: "Assassin's Creed Valhalla",
    descricao: "jogo de mundo aberto, mas ainda no mundo de AC",
    preco: 149.99,
    tamanho: "60GB",
    categoria: "acao/aventura",
    foto: "img\\OIP.jpg",
    calcularSubTotal: function (quantidade){ 
        return this.preco * quantidade;
    }
}
console.log(produto2);
document.write("Nome:" + produto2.nome + "<br>" + "<br>");
document.write("Preco:" + produto2.preco + "<br>" + "<br>");
document.write("Descricao:" + produto2.descricao + "<br>" + "<br>");
document.write("Tamanho:" + produto2.tamanho + "<br>" + "<br>");
document.write("Foto:" + produto2.foto + "<br>" + "<br>"+ "<img src="+produto2.foto+">")
document.write("<br>"+"<br>"+"Comprando 2 produtos o subtotal: " + produto2.calcularSubTotal(2)+ "reais");

