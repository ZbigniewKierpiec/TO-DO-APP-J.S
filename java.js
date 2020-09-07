let formAdd= document.querySelector('.add');
let ul = document.querySelector('ul');
let audio=document.querySelector('audio');
let audio2= document.querySelector('.page');
let formSearch= document.querySelector('.search');

const add=(toDo)=>{

const html=`
<li class="list-group-item d-flex justify-content-between align-items-center">

        <span>${toDo}</span>

        <i class="far fa-trash-alt delete"></i>

      </li>




`
ul.innerHTML+=html;

}



formAdd.addEventListener('submit', e=>{

e.preventDefault();

let toDo=formAdd.add.value.trim();
if(toDo.length){
console.log(toDo)

add(toDo)
formAdd.reset()
audio2.play()
}


})



ul.addEventListener('click',(e)=>{

if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
    audio.play()
}



})

const filterForm=(formSearchValue)=>{

 Array.from(ul.children)
 .filter(todo=> !todo.textContent.includes(formSearchValue))
 .forEach(toDo=>toDo.classList.add('filter'));
 Array.from(ul.children)
 .filter(todo=>todo.textContent.includes(formSearchValue))
 .forEach(toDo=>toDo.classList.remove('filter'));


}


formSearch.addEventListener('keyup', ()=>{

formSearchValue=formSearch.search.value.trim().toLowerCase();

filterForm(formSearchValue)

})