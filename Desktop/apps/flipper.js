var id1=document.getElementById('id1');
var div1=document.getElementById('div1');
id1.addEventListener('click',(e)=>{
    e.preventDefault();
    div1.style.backgroundColor='#'+(Math.random()*0xFFFFFF<<0).toString(16)
    
})