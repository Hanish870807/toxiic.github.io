const navBtn = document.getElementById("navBttn");
navBtn.innerHTML = "&#xe260;"
const menu = document.getElementById("menu");
navBtn.addEventListener("click", ()=>{
    if(menu.style.marginTop == '4.2rem'){
        menu.style.marginTop ="-50rem";
        navBtn.style.transform = "rotate(0deg)";
    }else{
        menu.style.marginTop = "4.2rem"

        navBtn.style.transform = "rotate(-90deg)"
    }
});
