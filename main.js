let btn=document.getElementById("btn");
let theme=false;
btn.addEventListener("click",function xyz(){
    if(!theme){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        btn.textContent="Switch to light mood";
        theme=true;
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        btn.textContent="Switch to dark mode";
        theme=false;
    }
    
})
