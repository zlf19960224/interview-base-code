//debounce
// function fd(){

// }
// var cd=false;
// var timerId=null;
// if(cd){
//        clearTimeout(timerId);
// }else{
//     fd()
//     cd=true;
//     timerId=setTimeout(()=>{
//         cd=false;
//     },3000)
// }
//throttle
// var throttle=function(func,delay){
//     var prev=Date.now();
//     return function(){
//         var context=this;
//         var args=arguments;
//         var now =Date.now();
//         if(now-prev>delay){
//             func.apply(context,args);
//             prev=Date.now;
//         }
//     }
// }
///
/**
 * 
 * @param {function} fn 
 * @param {number} delay 
 */
function throttle(fn, delay) {
    let timer=null;
    let context, args;
    let run = () => {
        timer =setTimeout(()=>{
            fn.apply(context,args);
            clearTimeout(timer);
            timer=null;
        },delay)
    }
    return function () {
        context = this;
        args = arguments;
        if (!timer) {
            console.log("throttle, set");
            run();
        } else {
            console.log("throttle, ignore");
        }
    }
}
var i = 0;
function m() {
    console.log(i++);
}
btn.onclick = function () {
    throttle(m, 3000)()
}