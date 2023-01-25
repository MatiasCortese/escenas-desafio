import { handleRoute } from "./handle-route";

function goTo(path){
    // With this method we add the path to the browser session history. It changes the url
    history.pushState({}, "", path);
    // Executes the corresponding function related to the given path
    handleRoute(path);
}

export function findAndProcessLinks(container:any = document){
    // We get the elements with that class
    const els = container.querySelectorAll(".link-interno");
    for (const link of els){
        link.addEventListener("click", (e) => {
            e.preventDefault();
            // We get the href attribute which is going to be the path
            const route = (e.target as any).getAttribute("href");
            goTo(route);
        })
    }
}

export function handleBandejaActivaBtn(){
    const mainBtns = document.querySelectorAll('.main-btn');
    for (const btn of mainBtns){
        if (btn.classList.contains("bandeja-activa")){
            btn.classList.remove("bandeja-activa");
        };
        btn.addEventListener('click', () => {
            btn.classList.add("bandeja-activa");
        })
    }
}

(function(){
    // We handle the last url given
    window.addEventListener('load', () => {
        handleRoute(location.pathname);
        findAndProcessLinks(document);
    });
})();

