var loader = document.querySelector(".box-load")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}

function sobre() {
    localStorage.setItem("acesso", true);
    window.location.href = "./pages-html/sobre.html";
}