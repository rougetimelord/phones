let e;

document.addEventListener("DOMContentLoaded", ()=>{
    e = document.body.getElementsByTagName("select");
    for(let i = 0; i < e.length; i++) {
        e[i].addEventListener("blur", (ev) => {
            e[i].disabled = true;
        })
    }
    document.getElementById("restart").addEventListener("click", (ev) =>{
        ev.preventDefault();
        for(let i = 0; i < e.length; i++) {
            e[i].disabled = false;
            e[i].value = Math.floor(Math.random()*10)
        }
    })
    document.getElementById("submit").addEventListener("click", ev => {
        ev.preventDefault();
        window.location="./index.html"
    })
})