//getting the generate btn
let generate_btn = document.querySelector("#btn");

// //generate btn on click
generate_btn.addEventListener("click", generate);

document.getElementById('length').addEventListener('change', charLength)

/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerText = charLength;
    return charLength;

}

function validate() {


}



// validate();

function generate() {


    let uppercase = "";
    let lowercase = "";
    let numbers = "";
    let symbols = "";

    if (document.getElementById("uppercase").checked) {
        uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        console.log(uppercase);
    }

    if (document.getElementById("lowercase").checked) {
        lowercase = 'abcdefghijklmnopqrstuvwxyz';
    }

    if (document.getElementById("numbers").checked) {
        numbers = '0123456789';
    }

    if (document.getElementById("symbols").checked) {
        symbols = '!@#$%^&*()';
    }
    // console.log(characters)

    let characters = uppercase + lowercase + numbers + symbols;

    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < charLength(); i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.querySelector("#password__result").value = result;

};







