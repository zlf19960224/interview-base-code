// function diff(obj1, obj2) {
//     var o1 = obj1 instanceof Object
//     var o2 = obj2 instanceof Object
//     if (!o1 || !o2) {
//         return o1 === o2;
//     }
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false;
//     }
//     for (let attrs in obj1) {
//         var t1 = obj1[attrs] instanceof Object
//         var t2 = obj2[attrs] instanceof Object
//         if (t1 && t2) {
//             return diff(obj1[attrs], obj2[attrs]);
//         } else if (obj1[attrs] !== obj2[attrs]) {
//             return false;
//         }
//     }
//     return true;
// }
var a = {
    name: {
        sex: 'men'
    }
};
var b = {
    name: {
        sex: 'man'
    }
};
console.log(diff(a, b));
//判断两对象是否相等
function diff(obj1, obj2) {
    var o1 = obj1 instanceof Object
    var o2 = obj2 instanceof Object
    if (!o1 || !o2) {
        return obj1 === obj2;
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let attrs in obj1) {
        let t1 = obj1[attrs] instanceof Object
        let t2 = obj2[attrs] instanceof Object
        if (t1 && t2) {
           return diff(obj1[attrs], obj2[attrs])
        } else if (obj1[attrs] !== obj2[attrs]) {
            return false;
        }
    }
    return true;
}