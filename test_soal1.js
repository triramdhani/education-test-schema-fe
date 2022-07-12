var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

function showModusNumber(data) {
    // membuat variabel yang berisi panjang array
     let dataLength = data.length;

    // urutkan element pada array dari angka terkecil 
    data.sort();

    // buat variable untuk menampung hasil jika array hanya terdapat satu item
    let finalNumberCount = 1 , frequentlyNumber = data[0];
    let currentNumberCount = 1;

    // looping array 
    for(let i = 1 ; i < dataLength ; i++ ) {
        if(data[i] == data[i-1]){
            currentNumberCount++;
        } else {
            currentNumberCount = 1;
        }
        if(currentNumberCount > finalNumberCount) {
            finalNumberCount = currentNumberCount;
            frequentlyNumber = data[i-1]
        }
    }

    return `total data paling banyak keluar adalah ${frequentlyNumber} sebanyak ${finalNumberCount}`
}

// test code program
console.info(showModusNumber(data1))
console.info(showModusNumber(data2))
console.info(showModusNumber(data3))