
/*get the number of characters*/
// function charLength() {

//     let charLength = document.getElementById('length').value;
//     document.getElementById('result').innerHTML = charLength;
//     return charLength;

// }

// document.getElementById('length').addEventListener('change', charLength)


// 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
// let characters;
// var length = 5 // user defined length

// for (var i = 0; i < length; i++) {
//     characters = Math.random();
// }
// console.log(characters);

let slider = document.getElementById("length");
let output = document.getElementById("result");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

//getting the generate btn
let generate_btn = document.querySelector("#btn");

//generate btn on click
generate_btn.addEventListener("click", generate);

function generate() {
    let random_password = Math.floor(Math.random() * document.getElementById("result").value)
    document.querySelector("#password__result").value = random_password;
};


