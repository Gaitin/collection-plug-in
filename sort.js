/**
 * desc 快排
 * params {Array} 数组
 * return {Array} 数组
 * */

const quickSort = (arr)=>{
    if(arr.length<=1) return arr
    const pivotIndex = Math.floor(arr.length / 2)  // 取一个中间值下标
    const pivot = arr.splice(pivotIndex,1)[0]      // 下标值取出来并在原数组中删除
    const left = [],right = []                     //  定义两个数组
    for(let i = 0;i<arr.length;i++){               // 遍历数组和取出值比较，小的放左边，大的放右边
        if(arr[i]< pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const list=[6,2,6,834,23,4,32,4,54,6,7]
console.log(quickSort(list))

/**
 * desc 冒泡
 * params {Array} 数组
 * return {Array} 数组
 * */

const bubbleSort = (arr) =>{
    let temp
    for(let i = 0;i<arr.length;i++){
        for(let j = 0;j<arr.length - i -1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([6,2,6,834,23,4,32,4,54,6,7]))
