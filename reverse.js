let process = e => {
    let str = document.getElementById("input").value + e.key;
    document.getElementById("output").innerText = str.split("").reverse().join("");
}

let submit = e => {
    window.location = "./index.html"
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("input").addEventListener("keypress", process)
});