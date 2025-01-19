
const themeSelector = document.querySelector("#mode-select");
function changeTheme() {
    const body =document.body
    const logo =document.querySelector("footer", "img")
    if(themeSelector.value == "dark")
    {
        document.body.className = "dark"
        logo.src = "byui-logo_white.png"
    }
    else{
        document.body.className=""
        logo.src = "byui-logo_blue.webp"
    }

}

themeSelector.addEventListener('change', changeTheme);