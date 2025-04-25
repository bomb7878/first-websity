// const body = document.body
// body.style.backgroundImage = "url('krasivaia-priroda.jpg')"
// body.style.backgroundSize = "cover"
// const container = document.getElementById("container")
// container.style.backgroundColor = "rgba(255,255,255,0.5)"
// container.style.fontWeight = "bold"
const myButton = document.getElementById("SendingButton");
const emailInput = document.getElementById("UserEmail");
const nameInput = document.getElementById("UserName");

const usernamePattern = /^[a-zA-Zа-яА-ЯёЁ0-9]{2,20}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

myButton.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const name = nameInput.value.trim();

    const isNameValid = usernamePattern.test(name);
    const isEmailValid = emailPattern.test(email);

    if (isNameValid && isEmailValid) {
        alert(`Дорогой ${name}, твой комментарий отправлен владельцу сайта!`);
    } else if (!isNameValid && isEmailValid) {
        alert(`Владелец этой почты: ${email}, напиши пожалуйста нормальное имя, чтобы твой комментарий был отправлен владельцу сайта!`);
    } else if (isNameValid && !isEmailValid) {
        alert(`Дорогой ${name}, напиши пожалуйста корректный адрес электронной почты, чтобы твой комментарий был отправлен владельцу сайта!`);
    } else {
        alert("Многоуважаемый пользователь, вы ошиблись и в написании имени и в написании адреса электронной почты, попробуйте снова, чтобы ваш комментарий был отправлен владельцу сайта!");
    }
});