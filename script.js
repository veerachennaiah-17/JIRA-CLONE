let model=document.querySelector(".model");
let form=document.querySelector(".create");
let togglebutnEle=document.querySelector(".modelToggle");
let addNewTask=document.querySelector("#addNew");
let draggableElement=null;

let cardDetails=document.querySelector(".card-details");
let section=document.getElementsByTagName("section")

function toggleModel(e){
    model.classList.toggle("hide-model");
    togglebutnEle.innerText=model.classList.contains("hide-model")?"create":"collpase";
}
addNewTask.addEventListener("click",toggleModel);
togglebutnEle.addEventListener("click",toggleModel);

function addCard(event){
    event.preventDefault();
}
function addCardOnDrop(event){
    event.currentTarget.appendChild(draggableElement);
}
let i=0;


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let title=form.title.value;
    let description=form.description.value;
    let days=form.days.value;
    let name=form.name.value;
    let status=form.status.value;

    let card=document.createElement("div");
    card.className="card-details";
    card.draggable="true";
    card.title=description;
    card.innerHTML=`<div>${title}</div>
                    <div class="div-image">
                        <span class="duration">${days}days</span>
                        <span class="dev-image">${name.substring(0,1).toUpperCase()}</span>
                    </div>` ;
    let section=document.getElementById(status); 
    section.appendChild(card);
    card.addEventListener("dragstart",Scrollfunction)
});
function Scrollfunction(event){
    draggableElement=event.currentTarget;
}
function addCard(event){
    event.preventDefault();
}
function addCardOnDrop(event){
    event.currentTarget.appendChild(draggableElement);
}
while(section[i]!=null){
   
    section[i].addEventListener("dragover",addCard);
    section[i].addEventListener("drop",addCardOnDrop);
    i++;
}
