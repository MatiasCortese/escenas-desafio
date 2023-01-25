export function createSentStateOne(){
    const sentStateOneEl = document.createElement("div");
    sentStateOneEl.classList.add("content-bandejas-sent");
    sentStateOneEl.innerHTML = `
    <div class="content-bandejas__sent-stateOne">
    <h3 class="content-bandejas__title">Enviados</h3>
    <ul class="sent-container">
        <li>
            <a class="link-interno content-bandejas__sent-email" href="/sent/9123">Correo 9123<div class="email-img"></div></a>
        </li>
        <li>
            <a class="link-interno content-bandejas__sent-email" href="/sent/4567">Correo 4567<div class="email-img"></div></a>
        </li>
    </ul>
    </div>`
    return sentStateOneEl;
}

export function createSentStateTwo() {
    const sentStateTwoEl = document.createElement("div");
    sentStateTwoEl.classList.add("content-bandejas-sent");
    // URL y contiene el nombre del mail. Podemos obtenerlo de ahi parseandolo
    const emailId = location.pathname.split("/");
    sentStateTwoEl.innerHTML = `<h2>Email enviado ${emailId[2]}</h2>`;
    return sentStateTwoEl;
}