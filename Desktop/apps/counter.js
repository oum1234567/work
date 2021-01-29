var id1=document.getElementById('id1');
var id2=document.getElementById('id2');
var id3=document.getElementById('id3');
var div1=document.getElementById('div1');
var i=0;
id1.addEventListener('click',(e)=>{
     i--;
     e.preventDefault();
     div1.innerHTML=`${i}`;
     if(i<0){
        div1.style.color="red"; 
     }
     if(i==0){
        div1.style.color="black";
    }
    if(i>0){
        div1.style.color="green";
    }
})
id3.addEventListener('click',(e)=>{
    i++;
    e.preventDefault();
    div1.innerHTML=`${i}`;
    div1.style.color="green";
    if(i<0){
        div1.style.color="red"; 
     }
     if(i==0){
        div1.style.color="black";
    }
    if(i>0){
        div1.style.color="green";
    }
})
id2.addEventListener('click',(e)=>{
    i=0;
    e.preventDefault();
    div1.innerHTML=`0`;
    div1.style.color="black";
    
})