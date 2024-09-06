// index page script
var menubar=document.querySelector(".menu-bar");
var menunavlink=document.querySelector(".menu-nav-link");
function menuclick()
{
    menunavlink.style.left="0"
}

var menuxbutton=document.getElementById("menu-button");
function menucancel()
{
    menunavlink.style.left="-80%"
}

// collection page script
var search=document.getElementById("input1")
var collcontainer=document.querySelector(".collection-container")
var element=collcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredText=event.target.value.toUpperCase()

    for(i=0;i<element.length;i++){
        var proname=element[i].querySelector("p").textContent
        if(proname.toUpperCase().indexOf(enteredText)<0){
            element[i].style.display="none"
        }
        else{
            element[i].style.display="block"
        }
    }
})