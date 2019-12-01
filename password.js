function generate(length = 12) {
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    var all = uppercase + lowercase + numbers + symbols;
    var password = '';
    for (var i = 0; i < length; i++) {
        var character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }

    return password;
}
window.onload = function () {
    var generateButton = document.querySelector('#generate');
    generateButton.addEventListener('click', function () {
        document.querySelector('#password').value = generate();
    });
}

document.getElementById("password").style.width = "100%";
document.getElementById("password").style.border = "dotted";
document.getElementById("password").style.borderColor = "blue";
document.getElementById("password").style.fontSize = "40px";
document.getElementById("box").style.paddingLeft = "50px";
document.getElementById("box").style.paddingRight = "50px";
document.getElementById("generate").style.backgroundColor = "teal";
document.getElementById("generate").style.fontSize = "30px";
document.getElementById("copy").style.background = "orange";
document.getElementById("copy").style.fontSize = "30px";