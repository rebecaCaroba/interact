let numbers = []
function add(){
    var n = Number(document.getElementById('num').value)
    if (n < 1 || n > 100){
        alert('Apenas números de 1 ate 100!')
    }else{
        //Ver se o número se encontra na lista
        function exisNum(n){
        if (numbers.indexOf(n) !== -1) {
            alert("Esse número já foi digitado antes!");
        }else{
            // Adiciona o número à lista de números
            numbers.push(n);

            // Criando elesmentos para exibir os números
            let numAdd = document.getElementById('numAdd')
            let res = document.getElementById('res')
            numAdd.innerHTML += `${n} adicionado! `
            }
        }
        exisNum(n)
    }

}

function finish(){
    // Declaraçâo de variáveis 
    var grea = numbers[0]
    var less = numbers[0]
    var sum = 0
    var aver = 0
    

    for(let c in numbers){
        // Maior ou menor..
        if(numbers[c] < less){
            less = numbers[c]
        }else{
            grea = numbers[c]
            
        }
        // Soma de todos os valores
        sum = sum + numbers[c] 
        // Média de todos os valores

        //Resultado
        aver = sum/numbers.length
        res.innerHTML = `<p>Ao todo ${numbers.length} número(s) foram cadastrados</p> `
        res.innerHTML += `<p>O maior numero é: ${grea}</p> `
        res.innerHTML += `<p>O menor numero é: ${less}</p> `
        res.innerHTML += `<p>A soma de todos os valores é: ${sum}</p> `
        res.innerHTML += `<p>A média é: ${aver}</p>`
    }

    
}