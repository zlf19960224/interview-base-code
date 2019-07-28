//  //  三种状态
//  const PENDING = "pending";
//  const RESOLVED = "resolved";
//  const REJECTED = "rejected";
//  // promise 接收一个函数参数，该函数会立即执行
//  function myPromise() {
//      let _this = this;
//      _this.currentStatus = PENDING;
//      _this.value = undefined;
//      _this.resolvedCallback = [];
//      _this.rejectedCallback = [];
//      _this.resolve = function (value) {
//          if (value instanceof myPromise) {
//              return value.then(_this.resolve, _this.reject);
//          } else {
//              //保证异步执行
//              setTimeout(() => {
//                  if (_this.currentStatus === PENDING) {
//                      _this.currentStatus = RESOLVED;
//                      _this.value = value;
//                      _this.resolvedCallback.forEach((cb) => { cb() })
//                      //按顺序执行
//                  }
//              })
//          }
//      }
//      _this.reject = function (reason) {
//          //保证异步
//          setTimeout(() => {
//              if (_this.currentStatus === PENDING) {
//                  _this.currentStatus = REJECTED;
//                  _this.value = reason;
//                  _this.rejectedCallback.forEach((cb) => { cb() })
//              }
//          });
//      }
//      // 用于保存 then 中的回调，只有当 promise
//      // 状态为 pending 时才会缓存，并且每个实例至多缓存一个
//  }
//  myPromise.prototype.then = function (onResolved, onRejected) {
//      var self = this;
//      //then必须返回新的promise
//      var newPromise;
//      //透传
//      onResolved = typeof onResolved === 'function' ? onResolved : v => v;
//      onRejected = typeof onRejected === 'function' ? onRejected : r => r;
//      if (self.currentStatus === RESOLVED) {
//          return (newPromise = new myPromise((resolve, reject) => {
//              setTimeout(() => {
//                  try {
//                      var x = onResolved(self.value)
//                      resolutionProcedure(newPromise, x, resolve, reject)
//                  } catch (reason) {
//                      reject(reason)
//                  }
//              })
//          }))
//      }
//      if (self.currentStatus === REJECTED) {
//          return (newPromise = new myPromise((resolve, reject) => {
//              setTimeout(() => {
//                  try {
//                      var x = onRejected(self.value)
//                      resolutionProcedure(newPromise, x, resolve, reject)
//                  } catch (reason) {
//                      reject(reason)
//                  }
//              })
//          }))
//      }
//      if (self.currentStatus === PENDING) {
//          return (newPromise = new myPromise((resolve, reject) => {
//              self.resolvedCallback.push(() => {
//                  try {
//                      var x = onResolved(self.value)
//                      resolutionProcedure(newPromise, x, resolve, reject)
//                  } catch (reason) {
//                      reject(reason);
//                  }
//              })
//          }))
//      }
//  }
//  //等待执行函数，判断边界条件
//  function resolutionProcedure(newPromise,x,resolve,reject) {
//      if(x === newPromise){
//          return reject(new TypeError("ERROR")) 
//      }
//      if(x instanceof myPromise){
//          if(x.currentStatus===PENDING){
//              x.then((value)=>{
//                  resolutionProcedure(newPromise,value,resolve,reject)
//              },reject)
//          }else{
//              x.then(resolve,reject)
//          }
//      }else{
//          return;
//      }
//  }
function myPromise() {
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    let _this = this;
    _this.value = null;
    _this.status = PENDING;
    _this.rejectedCallback = [];
    _this.resolvedCallback = [];
    _this.resolve = function (value) {
        if (value instanceof myPromise) {
            value.then(_this.resolve, _this.reject);
        } else {
            setTimeout(() => {
                if (_this.status === PENDING) {
                    _this.status = RESOLVED;
                    _this.value = value;
                    _this.resolvedCallback.forEach(cb => cb());
                }
            })
        }

    }
    _this.reject = function (reason) {
        setTimeout(() => {
            if (_this.status === PENDING) {
                _this.status = REJECTED;
                _this.value = reason;
                _this.rejectedCallback.forEach(cb => cb());
            }
        })
    }
}
myPromise.prototype.then = function (onResolved, onRejected) {
    var self = this;
    var promise2;
    onResolved = onResolved === 'function' ? onResolved : v => v;
    onRejected = onRejected === 'function' ? onRejected : r => { throw r };
    if (self.status === RESOLVED) {
        return promise2 = new myPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    var x = onResolved(self.value);
                    solution(promise2, x, resolve, reject)
                } catch (reason) {
                    reject(reason);
                }
            })
        })
    }
    if (self.status === REJECTED) {
        try {
            var x = onRejected(self.value);
            solution(promise2, x, resolve, reject);
        } catch (reason) {
            reject(reason)
        }
    }
    if (self.status === PENDING) {
        return (promise2 = new myPromise((resolve, reject) => {
           self.resolvedCallback.push(
            setTimeout(()=>{
                try{
                    var x=onResolved(self.value);
                    solution(promise2,x,resolve,reject)
                }catch(reason){
                    reject(reason);
                }               
            })
           )
        }))
    }
}
function solution(promise2,x,resolve,reject){
    if(x===promise2){
        return reject(new TypeError())
    }
    if(x instanceof myPromise){
        if(x.status===PENDING){
            x.then((value)=>{
                solution(promise2,value,resolve,reject)
            },reject)
        }else{
            x.then(resolve,reject);
        }
    }else{
        return;
    }
}