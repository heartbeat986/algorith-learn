function insertSort(array){
    // 0~index 排序
    for (let index = 1; index < array.length; index++) { 
        for (let j = index-1; j >= 0 && array[j] > array[j+1] ; j--) {
            swap(array,j,j+1)
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
    let sortedArray = insertSort(array)
    console.log(sortedArray)
}

doTest()