export function subtracao(valor) {
    let resultadoExatoSub = 0;
    let resultadoTotalSub = 0;
    let resultadoSub = 0;
    for (var i = 1; i <= valor * 5; i++) {
        for (var j = 1; j <= valor * 5; j++) {
            resultadoSub = i - j;
            if (resultadoSub > 0) {
                resultadoTotalSub++;
            } 
            if (resultadoSub === valor) {
                resultadoExatoSub++;
            }
        }
    }
    if (valor === 0) {
        return 0
    } else {
        return Math.ceil((resultadoExatoSub * 100) / resultadoTotalSub)       
    }
}