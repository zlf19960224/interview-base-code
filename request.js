function sendRequest(urls, max, cb) {
    arr=urls.reduce((result,current,index)=>{
        if(index<max){
            result.push(fetch(current).then(res=>res));
        }
        return result;
    },[]);
    (async (cb) => {
        for (let req of arr) {
            console.log(await req);
        }
        return cb;
    })(cb).then((cb) => { cb() });
}
function cb() {
    console.log('执行callback!')
}
function fetch(url) {
    //模拟时间不确定
    var time = Math.random() * 1000;
    //用setTimeout模拟异步
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(url);
        }, time);
    })
}
var arr = [];
var urls = ['1111', '2222', '3333'];
sendRequest(urls, 3, cb);