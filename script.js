// // Recebe os valores inseridos pelo usuario
// let digtNum = parseInt(prompt(`Digite um número: `));
// // Array criado para guardar os valores digitados no prompt
// let arrayDigtNum = [];
// // Variavel para iniciar o lop
// let somaNum = 0;
// // Condição: Até que o número digitado seja 0
// while(digtNum !== 0){
//     // Inseri número digitado no array
//     arrayDigtNum.push(digtNum)
//     // SomaNum recebe ele mesmo mais digtNum
//     somaNum = somaNum + digtNum;
//     // Continua perguntando até que o número sejá 0
//     digtNum = parseInt(prompt(`Digite um número: `));
// }
// // Número 0 confirmado, mostra o resultado no console.
// console.log(`A soma dos números ${arrayDigtNum.join(', ')} é: ${somaNum}`);



// let digitNum = (prompt(`Digite um número: `));

// for(let x = 0; x <= digitNum; x = x + 1){

//     console.log(x)

// }


// let array = [1, 55, 6, 77, 9, 33, 777];

// for(let i = 0; i < array.length; i = i + 1){

//     console.log(`Índice ${i}: é ${array[i]}`)

// }

// let tipoDeUsuario = prompt(`Qual o tipo de usuário?
// Digite A para Administrador
// Digite B para Usuário Comum
// Digite C para Usuário Assinante`).toUpperCase();

// while(tipoDeUsuario !== 'A'){

//     alert(`Acesso Negado!`)

//     tipoDeUsuario = prompt(`Qual o tipo de usuário?
// Digite A para Administrador
// Digite B para Usuário Comum
// Digite C para Usuário Assinante`).toUpperCase();

// }
// console.log(`O usuário digitado foi: ${tipoDeUsuario} - Boas-Vindas, Admin!`)

let tabuada = parseInt(prompt(`Digite um número para ver sua tabuada: `));

for(let t = 1; t <= 10; t = t + 1){

    console.log(`${tabuada} x ${t} = ${tabuada*t}`)

}

// let arrayString = ['a', 'b', 'c', 'd'];

// for(let array = 0; array < arrayString.length; array = array + 1){

//     console.log(arrayString[array].toLocaleUpperCase())

// }
