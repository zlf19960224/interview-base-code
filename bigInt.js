function add(a, b) {
    var aArr = Array.prototype.slice.call(a.toString());
    var bArr = Array.prototype.slice.call(b.toString());
    var arr = [];
    let inc = [];
    var length = aArr.length > bArr.length ? aArr.length : bArr.length;
    //初始化所有为0
    for (let j = length - 1; j > 0; j--) {
        if (!aArr[j]) {
            aArr.unshift(0);
        }
        if (!bArr[j]) {
            bArr.unshift(0);
        }
    }
    aArr = aArr.map((item) => parseInt(item));
    bArr = bArr.map((item) => parseInt(item));
    for (let i = length - 1; i >= 0; i--) {
        for (let j = length - 1; j >= 0; j--) {
            if (i === j) {
                var result = aArr[i] + bArr[j];
                inc.unshift(result);
                arr = resolution(inc);
            }
        }
    }
    return arr;
}
function resolution(inc) {
    for (var k = inc.length - 1; k >= 0; k--) {
        if (inc[k] >= 10) {
            if (k > 0) {
                inc[k] -= 10;
                inc[k - 1] += 1;
            }
        }
    }
    return parseInt(inc.join(""));
}
console.log(add(999999, 999));