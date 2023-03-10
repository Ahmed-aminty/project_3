// set nav bar list
const navBarList=document.getElementById("navbar__list");
const section=Array.from(document.querySelectorAll("section"));
// function to acsses for each section
function addListItem(){
    for (sec of section){
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
        navBarList.appendChild(listItem);
    }
}
addListItem();
// styling for the active states 
window.onscroll= function (){
    document.querySelectorAll("section").forEach(function (active){
        if (
            active.getBoundingClientRect().top>=-399 &&
            active.getBoundingClientRect().top<=149
        ){
            active.classList.add("your-active-class");
        }else{
            active.classList.remove("your-active-class");
        }
    });
};
const toTop = document.getElementById("to__top");
const header = document.querySelector(".page__header");
toTop.addEventListener("click",() =>{
    document.documentElement.scrollTo({top:0,behavior:"smooth"});
});
// when to do click on the item from the nav menu link must be scrollto the section
navBarList.addEventListener("click",(onSec)=> {
    onSec.preventDefault();
    if (onSec.target.dataset.nav){
        document
            .getElementById(`${onSec.target.dataset.nav}`)
            .scrollIntoView({behavior:"smooth"});
        setTimeout(()=>{
            location.hash = `${onSec.target.dataset.nav}`;
        },169);
    }
});
