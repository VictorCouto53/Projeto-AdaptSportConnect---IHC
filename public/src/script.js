function validateEmail(email) {
    var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailValid.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function redirectToLoginPage() {
    var email = document.getElementById("email").value;
    var emailConfirm = document.getElementById("emailConfirm").value;
    var password = document.getElementById("password").value;

    if (!validateEmail(email) || email !== emailConfirm) {
        alert("Por favor, verifique se o email foi preenchido corretamente e se os emails coincidem.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("A senha deve conter pelo menos 8 caracteres.");
        return false;
    }
    window.location.href = "/login";
}

function redirectToRegisterPage() {
    window.location.href = "/register";
}

function redirectToLoginIIPage() {
    window.location.href = "/login";
}

function redirectToMenuPage() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!validateEmail(email) || !validatePassword(password)) {
        alert("Por favor, verifique os campos de email e senha.");
    } else {
        window.location.href = "/menu";
    }
}

function redirectOutApp() {
    var confirmLogout = confirm("Tem certeza que deseja sair?");

    if (confirmLogout) {
        window.location.href = "/login";
    }
}

const daysContainer = document.getElementById('days');

function createCalendarDays() {
    for (let day = 1; day <= 31; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
    }
}

function redirectToEventPage(id) {
    window.location.href = `/dataEvent?id=${id}`;
}

function redirectToEventIIPage(id) {
    window.location.href = `/dataEventII?id=${id}`;

}

function redirectToHomePage() {
    window.location.href = "/menu";
}

function redirectToConfigPageI() {
    window.location.href = "/configuracoes";
}

function redirectToConfigPage() {
    var newEmail = document.getElementById("emailReset").value;
    var newEmailConfirm = document.getElementById("emailResetConfirm").value;
    var newPassword = document.getElementById("passwordReset").value;

    if (!validateEmail(newEmail) || newEmail !== newEmailConfirm) {
        alert("Por favor, verifique se o email foi preenchido corretamente e se os emails coincidem.");
        return false;
    }

    if (!validatePassword(newPassword)) {
        alert("A senha deve conter pelo menos 8 caracteres.");
        return false;
    }
    window.location.href = "/configuracoes";
}

function redirectToConfigConfirmPage() {
    window.location.href = "/configuracoesConfirm";
}

function redirectToPerfilPage() {
    window.location.href = "/userData";
}

function redirectToCalenderPage() {
    window.location.href = "/calender";
}

function showSuccessMessage() {
    document.getElementById("eventButton").style.display = "none";
    document.getElementById("successMessage").style.display = "flex";
    document.getElementById("successMessage").style.justifyContent = "center";
}

function returnPage() {
    window.history.back();
}

function openMenu() {
    var btnMenu = document.getElementById("sideBar");
    if (window.getComputedStyle(btnMenu).visibility === "hidden") {
        btnMenu.style.visibility = "visible";
    } else {
        btnMenu.style.visibility = "hidden";
    }
}

function redirectToSearchPage() {
    window.location.href = "/pesquisa";
}

createCalendarDays();
