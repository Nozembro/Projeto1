export function multiplicacao(valor) {
    let resultadoExatoMult = 0;
    let resultadoTotalMult = 0;
    let resultadoMult = 1;
    for (var i = 1; i <= valor; i++) {
        for (var j = i; j <= valor; j++) {
            resultadoMult = i * j;
            if (resultadoMult <= valor) {
                resultadoTotalMult++;
            } 
            if (resultadoMult === valor) {
                resultadoExatoMult++;
            }
        }
    }
    if (valor === 0) {
        return 0
    } else {
        return Math.ceil((resultadoExatoMult * 100) / resultadoTotalMult)     
    }
}