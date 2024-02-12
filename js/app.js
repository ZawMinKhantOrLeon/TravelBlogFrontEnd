

document.getElementById("mbtn").addEventListener("click",()=>{
        const nav = document.getElementById("nav");
        nav.classList.toggle("show");
})

window.addEventListener("load",()=>{
        document.getElementById("loader").style.display="none";
})


document.getElementById("contactForm").addEventListener("submit",(e)=>{
        e.preventDefault();
        const fd= new FormData(e.target);

})