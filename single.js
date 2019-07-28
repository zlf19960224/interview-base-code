// // 单例模式
// var Singleton=function(name){
//     this.name=name;
//     this.instance=null;
// }
// Singleton.prototype.getName=function(){
//     return this.name
// }
// function getInstance(name){
//     if(!this.instance){
//         this.instance=new Singleton(name);
//     }
//     return this.instance;
// }

// var a = getInstance("aa");
// var b = getInstance("bb");
// console.log(a.getName());
// console.log(a === b);
// console.log(b.getName());
// //代理模式
// var ProxyMode=(()=>{
//     var instance;
//     return function(html){
//         if(!instance){
//             instance=new Singleton(html)
//         }
//         return instance
//     }
// })()
const set = new Set([
    ['foo', 1],
    ['bar', 2]
  ]);
  const m1 = new Map(set);//set形式
  const m2 = new Map([['baz', 3]]);//二维数组形式
  const m3 = new Map(m2);//map形式
console.log(m1);
console.log(m2);
console.log(m3);