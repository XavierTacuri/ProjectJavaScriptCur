var globalVar = "Soy una variable global";
let globalLet = "Tambien soy global, pero con ambito let";
const globalConst = "Soy una constante global";


{
var blockVar = "Soy un var con ambito de bloque";
let blockLet="soy un let con ambito de bloque";
const blockConst="Soy constante bloque";
}
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
    var functionVar = "Soy una var con alcance de bloque";
    let functionLet = "Soy un let con alcance de bloque";
    const functionConst = "Soy un const con alcance de bloque";
    }
    show();
    
    console.log(functionVar); // Lanza ReferenceError
    console.log(functionLet); // Lanza ReferenceError
    console.log(functionConst); // Lanza ReferenceError/