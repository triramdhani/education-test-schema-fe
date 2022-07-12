let input1 = "hallo jesika24 selamat datang!";
let input2 = "hallo anggun selamat datang!";
let input3 = "hallo ** selamat datang!";
let input4 = "hallo Mariage889120! selamat datang";

// membuat fungsi validasi
function validate(input) {

    // buat array yang berisi variabel untuk menampung angka yang ada pada inputan
    // buat variabel untuk menampung pesan apabila inputan valid
    let numberInsideInput = [];
    let validMessage = `Sistem memeriksa data anda valid dengan inputan ${input} `
    
    // looping string inputan untuk mengambil angka pada inputan kemudian push ke array numberInsideInput
    for(let i = 0 ; i < input.length ; i++) {
        switch (input[i]) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                parseInt(input[i]);
                numberInsideInput.push(input[i])
                break;
            default:
                break;
        }
    }

    // buat pengkondisian jika array numberInsideInput tidak memiliki value atau kosong maka return validMessage
    // jika sebaliknya maka return errorMessage
    if(numberInsideInput.length === 0 ){
        return validMessage
    }else{
        let errorMessage =  `Sistem kami menolak untuk inputan berisi angka ${numberInsideInput.join("")}`
        return errorMessage;
    }
}

console.info(validate(input1))
console.info(validate(input2))
console.info(validate(input3))
console.info(validate(input4))