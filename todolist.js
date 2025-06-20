const form=document.querySelector(".add");
const list=document.querySelector(".todos");
const sea=document.querySelector(".search input");
//here we are adding the feature to add new todos
const tothelist=function(data){
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${data}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`
      list.innerHTML+=html;
};
form.addEventListener("submit",function(todo){
    todo.preventDefault();
    const data=form.add.value.trim();//here trim function removes the spaces before and after a word
    if(data.length>0){
        tothelist(data);
    }
    form.reset();
});
//here we are performed delete event
list.addEventListener("click",function(e){
    if(e.target.classList.contains("delete")==true){
        e.target.parentElement.remove();
    }
})

//here we are filtering for search event 
const filtertheword=function(todo){
    Array.from(list.children)
    .filter(function(term){
      return !term.textContent.toLowerCase().includes(todo);
    }).forEach(function(lil){
        lil.classList.add("filtered");
    });//when typed word dont match we add filter
    Array.from(list.children)
    .filter(function(term){
      return term.textContent.toLowerCase().includes(todo);
    }).forEach(function(lil){
        lil.classList.remove("filtered");
    });//when it matches weremove the class

}
sea.addEventListener("keyup",function(){
    const term=sea.value.toLowerCase().trim();//this function takes the typed value and pass to filter function to apply filter class for searching
    filtertheword(term);
});