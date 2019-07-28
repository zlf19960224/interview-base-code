var drigglable=false;
var prevX,prevY;
var x,y;
box.addEventListener("mousedown",function(e){
    drigglable=true;
    prevX=e.clientX;
    prevY=e.clientY;
})
document.addEventListener("mousemove",function(e){
    if(drigglable){       
        x=parseInt(e.clientX);
        y=parseInt(e.clientY);
        x-=parseInt(prevX);
        y-=parseInt(prevY);
        box.style.left=x+'px';
        box.style.top=y+'px';
    } 
})
document.addEventListener("mouseup",function(){
    drigglable=false;
})