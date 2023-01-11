const colorwhite = "rgb(222, 228, 250)"
const colorblue = "rgba(10, 56, 113, 1)"
let data = 1;

const encryptContent = () => {
    processedTextOnChange();
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);
    data = 1;
    encryptVar.style.backgroundColor = colorblue;
    encryptVar.style.color = colorwhite;
    encryptVar.value = "Encrypting..."


    decryptVar.style.backgroundColor = colorwhite;
    decryptVar.style.color = colorblue;
    decryptVar.value = "Decrypt"

    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length > 0) {
        encrypt(comprobation.value);
    }


}

const decryptContent = () => {
    processedTextOnChange();
    const decryptVar = document.querySelector(`.btn-decrypt`);
    const encryptVar = document.querySelector(`.btn-encrypt`);

    data = 2;


    encryptVar.style.backgroundColor = colorwhite;
    encryptVar.style.color = colorblue;
    encryptVar.value = "Encrypt"

    decryptVar.style.backgroundColor = colorblue;
    decryptVar.style.color = colorwhite;
    decryptVar.value = "Decrypting..."


    const comprobation = document.querySelector(`.textToProcessed`);
    if (comprobation.value.length > 0) {
        decrypt(comprobation.value);
    }

}


const encrypt = (value) => {
    
    const textArea = document.querySelector(`.processedText-textarea`);


    let Encriptador = [/e/gi, /i/gi, /a/gi, /o/gi, /u/gi, /b/gi, /c/gi, /d/gi, /f/gi, /g/gi, /h/gi, /j/gi, /k/gi, /l/gi, /m/gi, /n/gi, /p/gi, /q/gi, /r/gi, /s/gi, /t/gi, /v/gi, /w/gi, /x/gi, /y/gi, /z/gi];
    let palabrasClave = ["enter", "imes", "ai", "ober", "ufat", "fly", "down", "up", "liv", "look", "spy", "chemistry", "non", "looser", "air", "fire", "xmen", "superman", "bionic", "lunatic", "perfect", "grace", "grease", "beach", "sky", "sea"];
    let newstr = value;
    for (let i = 0; i < palabrasClave.length; i++) {
        newstr = newstr.replace(Encriptador[i], palabrasClave[i]);
    }
    textArea.value = newstr;

}

const decrypt = (value) => {
    const textArea = document.querySelector(`.processedText-textarea`);

    let palabrasClave = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
    let desencriptador = ["e", "i", "a", "o", "u"];
    let newstr = value;
    for (let i = 0; i < palabrasClave.length; i++) {
        newstr = newstr.replace(palabrasClave[i], desencriptador[i]);
    }
    textArea.value = newstr;
}

//

const keyPressEvent = (e) => {
    if (data === 1) {
        encryptContent();
    } else {
        decryptContent();
    }
}


const mainFunctional = () => {

    const comprobation = document.querySelector(`.textToProcessed`);
    comprobation.addEventListener('keyup', keyPressEvent);

    const encryptVar = document.querySelector(`.btn-encrypt`);
    const decryptVar = document.querySelector(`.btn-decrypt`);
    encryptVar.addEventListener('click', encryptContent);
    decryptVar.addEventListener('click', decryptContent);

}
mainFunctional();
