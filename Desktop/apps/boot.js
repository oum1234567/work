var todo1=document.getElementById('todo1');
var id1=document.getElementById('id1');
var form2=document.getElementById('form2');

id1.onclick=(event)=>{
    event.preventDefault();
  
    form2.innerHTML+=`<div  style="display: flex;justify-content: space-between;margin-bottom: 20px;">
    <input type="checkbox" job="check">
    <label  for="field">${todo1.value}</label>
    
    <input type="button"  class="btn btn-warning" value="delete" job="delete"></div>`;
    todo1.value="";
}
function removetodo(element){
    element.parentNode.parentNode.removeChild( element.parentNode);
}
function todo(element){
    return(element.parentNode.innerHTML);
}


form2.addEventListener('click',function(event){
    var element =event.target;
    if(element.attributes.job.value=='delete'){
          removetodo(element);
    }
})
var form3=document.getElementById('form3');
form2.addEventListener('click',function(event){
    var element =event.target;
    var div=document.createElement('div');
    div.innerHTML=todo(element);
    div.className='div2';
    div.style.display='flex';
    div.style.justifyContent='space-between';
    div.style.marginBottom='20px';
    div.firstChild.nextSibling.nextSibling.nextSibling.style.textDecoration="line-through";

    if(element.attributes.job.value=='check'){
        form3.appendChild(div).innerHTML;
        removetodo(element);
    }
   
})
form3.addEventListener('click',function(event){
    var element =event.target;
    if(element.attributes.job.value=='delete'){
        removetodo(element);
   }
})


