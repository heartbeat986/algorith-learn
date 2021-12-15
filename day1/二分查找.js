

function findNum(array,num,L,R){
    if (L >= R || array.length === 0) {
        return
    }
 let position = L + ((R-L) >> 1)
 while (position > L && position < R) {
     let positionValue = array[position]
     if (positionValue === num ) {
         return position
     } else if (positionValue > num) {
         position = L + ((position  - L -1)>>1) 
     } else if(positionValue < num){
        position = position + ((R-position + 1)>>1) 
     }
    //  console.log(position)
 }
 return -1
}


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
    let length = Math.ceil((size+1) * Math.random())
    for (let index = 0; index < length; index++) {
        array[index] = Math.ceil((maxValue+1) * Math.random()) - Math.ceil(maxValue * Math.random())
    }
    array[length-2] = 5
    return array
}


function doTest(){
    let array = randomArray(15,100)
    let sortedArray = insertSort(array)
    console.log(sortedArray)
    let position = findNum(array,5,0,array.length-1)
    console.log(position)
}

doTest()