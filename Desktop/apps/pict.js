var list =Array('rimi1.jpg','rimi2.jpg','rimi3.jpg','rimi4.jpg','rimi5.jpg');
var id1=document.getElementById('id1');
var id2=document.getElementById('id2');
var div1=document.getElementById('div1');
console.log(list[1])
var i=0;
id2.addEventListener('click',(e)=>{
    i++;
    if(i==list.length){
        i=0;
    }
    e.preventDefault();
    div1.style.backgroundImage=`url(${list[i]})`;
    
})
id1.addEventListener('click',(e)=>{
    i--;
    if(i==-1){
        i=list.length-1
    }
    e.preventDefault();
    div1.style.backgroundImage=`url(${list[i]})`;
    
})