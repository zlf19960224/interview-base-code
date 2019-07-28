// var http = require('http');
// function express (){
//   let func=[];
//   var i=0;
//   var app=function(req,res){
//       function next (){
//           let task=func[i++];
//           if(!task){
//               return;
//           }
//           task(req,res,next)
//       }
//       next();
//   }
//   app.use = function (task){
//       func.push(task);
//   }
//  return app;
// }
// function a(req,res,next){
//   console.log(1)
//   next();

// }
// function b(req,res,next){
//   next();
//   console.log(2)
// }
// function c(req,res,next){
//   next();
//   console.log(3);
// }
// var app=express();
// http.createServer(app).listen('3000', function () {
//     console.log('listening 3000....');
//   });
// app.use(a);
// app.use(b);
// app.use(c);




var express=function(){
  let func=[];
  let i=0;
  function app(req,res){
    function next(){
      var task = func[i++];
      if(!task){
        return ;
      }
      task(req,res,next);
    }
  }
  app.use=function(fn){
    func.push(fn);
  }
  return app;
}










// 第一种继承
// function ex1(){

// }
// function ex2(){
//   ex1.call(this);
// }

// //第二种
// function ex1(){

// }
// function ex2(){}
// ex1.prototype=new ex2();
// 第三种
// function ex1(){

// }
// function ex2(){

// }
// ex1.prototype=ex2.prototype;
//第四种
// function ex1(){

// }
// function ex2(){

// }
// // ex2.prototype=Object.create(ex1.prototype);
// // ex2.prototype.constructor=ex2;
// //第五种
// class ex1 extends ex2 {
//   constructor(){
//     super()
//   }
// }
// let cp = ex1();