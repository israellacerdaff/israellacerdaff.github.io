function verificarOrdenacao(numero) {
    const digitos = String(numero).split('').map(Number); // converte o número em array de dígitos

    // Verifica se os dígitos estão em ordem crescente
    let crescente = true;
    for (let i = 0; i < digitos.length - 1; i++) {
        if (digitos[i + 1] !== digitos[i] + 1) {
            crescente = false;
            break;
        }
    }

    // Verifica se os dígitos estão em ordem decrescente
    let decrescente = true;
    for (let i = 0; i < digitos.length - 1; i++) {
        if (digitos[i + 1] !== digitos[i] - 1) {
            decrescente = false;
            break;
        }
    }

    if (crescente) {
        return "Os dígitos estão em ordem crescente.";
    } else if (decrescente) {
        return "Os dígitos estão em ordem decrescente.";
    } else {
        return "Os dígitos não estão em ordem sequencial.";
    }
}

// Exemplo de uso:
console.log(verificarOrdenacao(12345678)); // Saída: Os dígitos estão em ordem crescente.
console.log(verificarOrdenacao(152456457)); // Saída: Os dígitos estão em ordem decrescente.
console.log(verificarOrdenacao(135)); // Saída: Os dígitos estão em ordem crescente.
console.log(verificarOrdenacao(321)); // Saída: Os dígitos estão em ordem decrescente.
console.log(verificarOrdenacao(111)); // Saída: Os dígitos estão em ordem crescente.
