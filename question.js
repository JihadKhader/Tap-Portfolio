// I solved it in three ways
// The wors one was O(n^2) Big O of n square
function twoSumBruteForce(nums, target) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
// Second solution is using sorting and two pointers O(n Log n)
function twoSumSort(nums, target) {
    const sortedNums = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);
    let left = 0;
    let right = sortedNums.length - 1;
    while (left < right) {
        const currentSum = sortedNums[left].num + sortedNums[right].num;
        if (currentSum === target) {
            return [sortedNums[left].index, sortedNums[right].index];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}
//The best by using hashmap
function twoSum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numIndices) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const resultWorst = twoSumBruteForce(nums, target);
const resultSort = twoSumSort(nums, target);
const resultBest = twoSum(nums, target);
console.log("Best Solution is : " + resultBest);
console.log("Sort Solution is : " + resultSort);
console.log("Worst Solution is : " + resultWorst);
