/*
 * Funzione per aprire e chiudere il menu utente
 */
function toggleUserMenu(){
    //Recupera il tag html che rappresenta il menu utente
    var userMenu = document.getElementById("page").getElementsByTagName("aside")[0];
    
    //Se l'attributo style è già settato lo rimuove, altrimenti imposta margin-left per nascondere il menu
    if(!userMenu.getAttribute("style")){
        userMenu.setAttribute("style", "margin-left: -"+userMenu.offsetWidth+"px");
        //Aggiunge il listener per aggiornare margin-left
        window.addEventListener("resize", updateMarginMenu, false);
    }
    else{
        userMenu.removeAttribute("style");
        //Rimuove il listener per aggiornare margin-left
        window.removeEventListener("resize", updateMarginMenu, false);
    }
}

/*
 * Funzione per aggiornare il margine sinistro così da mantenere il contenitore laterale nascosto
 */
function updateMarginMenu() {
    //Recupera il tag html che rappresenta il menu utente
    var userMenu = document.getElementById("page").getElementsByTagName("aside")[0];
    
    //Aggiorna il valore di margin-left
    userMenu.setAttribute("style", "transition: unset; margin-left: -"+userMenu.offsetWidth+"px");
}

/*
 * Funzione per eliminare il contenitore di un messaggio
 */
function deleteMessage(btn) {
    btn.parentNode.parentNode.setAttribute("style","transition: opacity 500ms; opacity: 0");
    setInterval(function(){ btn.parentNode.parentNode.remove(); }, 500);
}
