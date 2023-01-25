import { createInboxStateOne, createInboxStateTwo } from "./inbox-bandeja";
import { createSentStateOne, createSentStateTwo } from "./sent-bandeja";
import { findAndProcessLinks, handleBandejaActivaBtn } from "./index";

// this function receives a route and decides what to do. Maps paths with functions. It's the routing itself
export function handleRoute(route:any){
    // here we create the router mechanism. we make a collection where each object has a function associate to a different route
    const routes = [
        {
            path: /\/inbox/,
            handler: createInboxStateOne,
        },
        {
            path: /\/inbox\/./,
            handler: createInboxStateTwo,
        },
        {
            path: /\/sent/,
            handler:  createSentStateOne,
        },
        {
            path: /\/sent\/./,
            handler:  createSentStateTwo,
        }
    ];
    for(const r of routes){
        //  if the route is ok some object in the collection we execute the corresponding function
        if (r.path.test(route)) {
            const el = r.handler();
            const bandejasEl = document.querySelector(".bandejas-content");
            handleBandejaActivaBtn();
            if (bandejasEl?.firstChild) {
                bandejasEl.firstChild.remove();
            }
            bandejasEl?.appendChild(el);
            findAndProcessLinks(el);
        }
    }
}