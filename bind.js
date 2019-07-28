Function.prototype._bind=function(){
    let args= Array.prototype.slice.call(arguments,1);
    return function(){
        this.apply(args);
    }
    
}