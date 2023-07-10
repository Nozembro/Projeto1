import { soma } from "./js/soma.js"
import { subtracao } from "./js/subtracao.js"
import { multiplicacao } from "./js/multiplicacao.js"
import { divisao } from "./js/divisao.js"

document.addEventListener('DOMContentLoaded', function() {
    const fillInput = document.getElementById('fillInput');
    const circulos = document.querySelectorAll('.circulo');
    const porcentagens = document.querySelectorAll('[id^="porcentagem"]');
  
    function encheCirculos() {
      const fillPorcentagem = parseInt(fillInput.value) || 0;
  
      const result1 = soma(fillPorcentagem);
      const result2 = subtracao(fillPorcentagem);
      const result3 = multiplicacao(fillPorcentagem);
      const result4 = divisao(fillPorcentagem);

      const results = [result1, result2, result3, result4];
  
      circulos.forEach((circulo, index) => {
        const fillElemento = circulo.querySelector('.fill');
        const fillHeight = (circulo.offsetHeight * results[index]) / 100;
        fillElemento.style.height = `${fillHeight}px`;
        porcentagens[index].textContent = `${results[index]}%`;
      });
    }
  
    document.getElementById('botaoResultado').addEventListener('click', encheCirculos);
});
