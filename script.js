const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".contet");

const date = new Date("2026-11-17T00:00:00");

buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        // remove active dos botões
        buttons.forEach(btn => btn.classList.remove("active"));

        // esconde conteúdos
        contents.forEach(content => {
            content.style.display = "none";
        });

        // ativa botão clicado
        button.classList.add("active");

        // mostra conteúdo correto
        contents[index].style.display = "block";

    });

});

// primeiro conteúdo ativo
buttons[0].classList.add("active");
contents[0].style.display = "block";

function countTime() {

    const currentTime = new Date();

    const totalSeconds = (date - currentTime) / 1000;

    // quando acabar o tempo
    if (totalSeconds <= 0) {

        document.querySelectorAll(".timer-number")
            .forEach(item => {
                item.textContent = "0";
            });

        return;
    }

    // cálculos
    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours =
        Math.floor(totalSeconds / 3600) % 24;

    const minutes =
        Math.floor(totalSeconds / 60) % 60;

    const seconds =
        Math.floor(totalSeconds) % 60;

    // atualiza todos os timers
    for (let i = 0; i < 4; i++) {

        document.getElementById(`day${i}`).textContent = days;

        document.getElementById(`hour${i}`).textContent = hours;

        document.getElementById(`min${i}`).textContent = minutes;

        document.getElementById(`sec${i}`).textContent = seconds;
    }
}

// executa contador
countTime();

// atualiza a cada 1 segundo
setInterval(countTime, 1000);