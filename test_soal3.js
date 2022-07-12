// function leftTriangle(n) {
//     let string = "";
//     for (let i = 1; i <= n ; i++) {
//         for( let j = 0; j < i; j++){
//             string += "*";
//         }
//         string += "\n";
//     }
//     return string;
// }

// kode output 1
const leftTriangle = (n) => {
    let string = "";
    for (let i = 1; i <= n ; i++) {
        for( let j = 0; j < i; j++){
            string += "*";
        }
        string += "\n";
    }
    return string;
}


// kode output 2
const rightTriangle = (n) => {
    let string = "";
    for (let i = 1; i <= n ; i++) {
        for( let j = 0; j < n - i; j++){
            string += " ";
        }
        for(let k = 0 ; k < i; k++) {
            string += "*"
        }
        string += "\n";
    }
    return string;
}

// 
console.log(leftTriangle(5))
console.log(rightTriangle(5))

