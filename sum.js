// function twoSum(nums,target){
//    var minusNum=0;
//     var num=[];
//    nums.map((item,index)=>{

//             minusNum=target-item;
//             if(nums.indexOf(minusNum)!==-1){
//                 num = [nums.indexOf(minusNum),index];
//             }

//    })
//    return num;
// }
// let num=[2,7,11,15];
// let target=9;
// console.log(twoSum(num,target));
function getNum(num, n, target) {
    let nums = [];

    let newNumArr = flatten(num)
    console.log(newArr(n, target, newNumArr));
}
function flatten(num) {
    num.map((item) => {
        if (Array.isArray(item)) {
            var items = item.flat()
            flatten(items);
        } else {
            nums.push(parseInt(item));
        }
    })
    return nums;
}
function newArr(n, target, newNumArr) {
    let arr = [];
    let nArr = [];
    var minus = target;
    for(var i=0;i<newNumArr.length;i++){
       return dg(n,minus,newNumArr,i);
    }
}
function dg(n,minus,newNumArr,index){
    if(n===0&&minus===0){
        return nArr=arr;
    }else if(n<=0){
        return false;
    }
    if(n>0){
        minus2=minus-newNumArr[index];
       return dg(n-1,minus2,newNumArr,index+1)||dg(n,minus,newNumArr,index+1);
    }
}

let num = [1, '2', [3, [4, 5]]];
let target = 13;
let n = 4;

let nums = [];
getNum(num, n, target);