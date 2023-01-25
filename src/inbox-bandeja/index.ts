import { emit } from "process";

export function createInboxStateOne(){
    const inboxStateOneEl = document.createElement("div");
    inboxStateOneEl.classList.add("content-bandejas-inbox")
    inboxStateOneEl.innerHTML = `
    <div class="content-bandejas__inbox-stateOne">
        <h3 class="content-bandejas__title">Inbox</h3>
        <ul class="inbox-container">
            <li>
                <a class="link-interno content-bandejas__inbox-email" href="/inbox/1234">Correo 1234<div class="email-img"></div></a>
            </li>
            <li>
                <a class="link-interno content-bandejas__inbox-email" href="/inbox/5678">Correo 5678<div class="email-img"></div></a>
            </li>
        </ul>
    </div>`
    return inboxStateOneEl;
}

export function createInboxStateTwo() {
    const inboxStateTwoEl = document.createElement("div");
    inboxStateTwoEl.classList.add("content-bandejas-inbox");
    // URL y contiene el nombre del mail. Podemos obtenerlo de ahi parseandolo
    const emailId = location.pathname.split("/");
    inboxStateTwoEl.innerHTML = `<h2>Email recibido ${emailId[2]}</h2>`;
    return inboxStateTwoEl;
}