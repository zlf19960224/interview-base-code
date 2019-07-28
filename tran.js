// function trans(str) {
//     let newStr = Array.prototype.slice.call(str, 0);
//     console.log(newStr.length)
//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[0] === "-") {
//             newStr.shift();
//         }
//         if (newStr[i] === "-") {
//             newStr.splice(i, 1);
//             newStr[i] = newStr[i].toUpperCase();
//         }

//     }
//     return newStr.join("");
// }
// console.log(trans("-webkit-background-image"));
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let arr = [];
    nums.sort((a, b) => {
        return a - b;
    })
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let L = i + 1;
        let R = len - 1;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                arr.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] === nums[L + 1]) L++;
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else if (sum > 0) {
                R--;
            }
        }
        console.log(i, L, R);
    }
    return arr;
};
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));