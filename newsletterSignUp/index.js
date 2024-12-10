const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");
const form = document.getElementById("form");
const button = document.getElementById("submit")

const card = document.getElementById('card');
const successPage = document.getElementById('success-page');
const spButton = document.getElementById('success-card-button');
const scText = document.getElementById('success-card-text')

button.addEventListener('click', validate)
spButton.addEventListener('click',dismiss)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validate()) {
        card.classList.add('invisible')
        successPage.classList.add('visible')
        scText.innerHTML = `A confirmation email has been sent to <strong>${emailInput.value}</strong>. Please open it and click the button inside to confirm your subscription.`;
        form.reset();
    }
});
function validate() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError();
        return false;
    } else if (!isEmail(emailValue)) {
        showError();
        return false;
    } else {
        hideError();
        return true;
    }
}

function showError() {
    errorMessage.classList.add('visible');
    emailInput.classList.add('visible');
}

function hideError() {
    errorMessage.classList.remove('visible');
    emailInput.classList.remove('visible');
}

function isEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function dismiss(){
    card.classList.remove('invisible');
    successPage.classList.remove('visible');
    form.reset();
}