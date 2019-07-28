let newResult = [];
function flat(arr, n) {
    if (n < 0) {
        newResult.push(arr);
        return;
    }
    arr.map((item) => {
        if (Array.isArray(item)) {
            flat(item, n - 1);
        } else {
            newResult.push(item);
        }
    })
    return newResult;
}
console.log(flat([1, 2, [3, 4], [5, 6, [7, 8]]], 1));   //[1,2,3,4,5,6,Array[2]]