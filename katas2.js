// comece a criar a sua função add na linha abaixo
function add(a, b){
    return a+b;
}

// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(c, d){
    let resultado =0;
    for(let i=0; i<d; i++){
        resultado=add(resultado, c)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x, n){
    let resultado=1;
    for (let i=1; i<=n; i++){
        resultado=multiply(resultado, x);
    }
    return resultado;
}
// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(a){
    let resultado=1;
    for(let i=a; i>=1; i--){
        resultado=multiply(resultado, i)
    }
    return resultado
}


// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */


// crie a função fibonacci
/*
function fibonacci(n){
    let a=0;
    let b=1;
    let resultado=b;
    for(let i=2; i<n; i++){
        resultado=add(a,b)
        a=b
        b=resultado
    }
    return resultado
} */
// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
