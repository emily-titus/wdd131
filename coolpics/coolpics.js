const menuButton = document.querySelector(".menuButton")

function displayMenu(){
    const menu = document.querySelector(".menu nav")
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", displayMenu)

function handleResize(){
    const menu = document.querySelector(".menu nav")

    if (window.innerWidth > 1000){
        menu.classList.remove("hide")
    }
    else{
        menu.classList.add("hide")
    }
}

handleResize();

function viewerTemplate(image, alt){
    return `<div class="viewer">
  <button class="close-view">X</button>
  <img src="${image}" alt="${alt}">
</div>`
}

function closeViewer(){
    document.querySelector(".viewer").remove();
}

function viewHandler(event){
    const img = event.target;
    let src = img.src;
    let newSrc = src.replace("-sm","-full")

    document.body.insertAdjacentHTML("afterbegin",viewerTemplate(newSrc,"Full size picture"));
    document.querySelector(".close-view").addEventListener("click",closeViewer)

}

document.querySelector(".gallery").addEventListener("click",viewHandler)