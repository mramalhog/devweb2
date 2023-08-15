function item(entrada: string): string {
  return `\t<li>${entrada}</li>\n`;
}

function listar(elementos: string[]): string {
  let soma = elementos.reduce (function(total,elemento){
    return total + item(elemento);
}, "");
  return `<ul>\n${soma}</ul>\n`;
}

const frutas = ["Manga", "Laranja", "Maça", "Uva"];
const resultado = listar(frutas);
console.log(resultado);
