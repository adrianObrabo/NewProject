const buttons = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".contet");
const timer = document.querySelectorAll(".timer");

const date = new Date("2026-11-17T00:00:00");

buttons.forEach((button, index) => {

    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("active"));

        contents.forEach(content => {
            content.style.display = "none";
        });

        button.classList.add("active");

        contents[index].style.display = "block";
    });

});

buttons[0].classList.add("active");
contents[0].style.display = "block";

function countTime() {

    const currentTime = new Date();

    const totalSeconds = (date - currentTime) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    timer[0].textContent =
        `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

countTime();

setInterval(countTime, 1000);