// 选择排序-O(N^2)
function selectionSort(array) {
    if (!array || array.length === 0) {
        return []
    }
    for (let index = 0; index < array.length - 1; index++) {
        let minIndex = index
        for (let j = index + 1; j < array.length; j++) {
            const element = array[j];
            if (element < array[minIndex]) {
                minIndex = j
            }
        }
        swap(array,index,minIndex);
    }
    console.log(array)
}

// 交换 原始位置，最小位置
function swap(array,targetIndex,minIndex){
 let temp = array[targetIndex]
 array[targetIndex] = array[minIndex]
 array[minIndex] = temp
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
    let array = randomArray(100 , 200)
    // let array = [10,9,71,0,3,8]
    selectionSort(array)
}

doTest()