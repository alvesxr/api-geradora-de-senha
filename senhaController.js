export function gerarSenha(tamanho, incluir_letra_maiuscula, numeros, simbolos) {

    //definir o conjunto de caracteres que podem ser usados para gerar a senha
    const letra_maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' //A até Z
    const letra_minuscula = 'abcdefghijklmnopqrstuvwxyz' //a até z
    const numeros_validos = '0123456789' //0 até 9
    const simbolos_validos = '!@#$%&*()_+[]{}|;:,.<>?/~`' //símbolos apenas

    //Inicializar o conjunto de caracteres possíveis com as letras minúsculas
    let caracteres = letra_minuscula  // Começamos com as letras minúsculas
    //Adicionar letras maiúsculas, números e símbolos ao conjunto de caracteres
    if (incluir_letra_maiuscula) {
        caracteres += letra_maiuscula // Adiciona letras maiúsculas
    }
    if (numeros) {
        caracteres += numeros_validos // Adiciona números
    }
    if (simbolos) {
        caracteres += simbolos_validos // Adiciona símbolos
    }

    let senha = "" // Inicializa a variável senha como uma string vazia

    for (let i = 0; i < tamanho; i++) {
        // Gera um índice aleatório
        const indice = Math.floor(Math.random() * caracteres.length)
        // Math.random() gera um número entre 0 e 1, multiplicamos pelo comprimento do conjunto de caracteres
        
        senha += caracteres[indice] // Adiciona o caractere correspondente ao índice gerado à senha         
    }//fim do for 
    return senha // Retorna a senha gerada

}//fim da função gerarSenha