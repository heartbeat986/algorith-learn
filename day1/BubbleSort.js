// 冒泡排序，O(N^2)
// 思想是index与index+1比较，右边比左边小交换，一次循环搞定一个
function sort(array){
    for (let index = array.length-1; index > 0; index--) {
        for (let j = 0; j < index; j++) {
            if (array[j] > array[j+1]) {
                swap(array,j,j+1)
            }
        }
    }
    return array
}

// 异或实现：x^x=0;x^0=x
function swap(array,targetIndex,minIndex){
    // let temp = array[targetIndex]
    // array[targetIndex] = array[minIndex]
    // array[minIndex] = temp
    array[targetIndex] = array[targetIndex] ^ array[minIndex]
    array[minIndex] = array[targetIndex] ^ array[minIndex]
    array[targetIndex] = array[targetIndex]^array[minIndex]
   }
   
   
   
function randomArray(size,maxValue){
    let array = new Array()
    let length = (size+1) * Math.random()
    for (let index = 0; index < length; index++) {
        array[index] = Math.ceil((maxValue+1) * Math.random()) - Math.ceil(maxValue * Math.random())
    }
    return array
}


function doTest(){
    let array = randomArray(15,100)
    let sortedArray = sort(array)
    console.log(sortedArray)
}

doTest()