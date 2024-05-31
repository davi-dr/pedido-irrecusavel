
let button = document.getElementById('no');
    let height = window.innerHeight - 50;
    let width = window.innerWidth - 50;

    button.addEventListener('mouseover', function () {
        button.style.position = "absolute";
        button.style.top = Math.random() * height + "px";
        button.style.left = Math.random() * width + "px";
    }

    )

    function clickSim (){
        alert("Ótima Escolha!" + String.fromCodePoint(0x1F37A))
    }