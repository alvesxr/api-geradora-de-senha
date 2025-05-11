export function gerarSenha(tamanho, letra_maiscula, numeros, simbolos) {

    //definir o conjunto de caracteres que podem ser usados para gerar a senha
    const letra_maiscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //A ate Z
    const letra_minuscula = "abcdefghijklmnopqrstuvwxyz"//a ate z
    const numeros = "0123456789"//0 ate 9
    const simbolos = "!@#$%&*()_+[]{}|;:,.<>?/~`"//simbolos apenas

    //Inicializar o conjunto de caracteres possíveis com as letras minúsculas
    let caracteres = letrasMinusculas  // Começamos com as letras minúsculas
    //Adicionar letras maiúsculas, números e símbolos ao conjunto de caracteres
    if (letra_maiscula) {
        caracteres += letra_maiscula // Adiciona letras maiúsculas
    }
    if (numeros) {
        caracteres += numeros // Adiciona números
    }
    if (simbolos) {
        caracteres += simbolos // Adiciona símbolos
    }

    let senha = "" // Inicializa a variável senha como uma string vazia

    for(let i = 0; i < tamanho; i++) {
         // Gera um índice aleatório
        const indice = Math.floor(Math.random() * caracteres.length)
        // Math.random() gera um número entre 0 e 1, multiplicamos pelo comprimento do conjunto de caracteres
        
        senha += caracteres[indice] // Adiciona o caractere correspondente ao índice gerado à senha         
    }//fim do for 
    return senha // Retorna a senha gerada


}//fim da função gerarSenha