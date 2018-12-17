export function reorderArray(arr, propToCheck, order = 1) {
    //Arr : the array
    //propToCheck : the property in the object to reorder by
    //order : sortBy, 1 = highest first, 0 = lowest first
    let returnArray = []
    let propsSet = new Set()
    let propsArr = []
    let subArrs =[]
    arr.map(obj => {propsSet.add(obj[propToCheck])})
    propsArr = [...propsSet]
    if(order === 1) {
        propsArr.sort()
        propsArr.reverse()
    } else {
        propsArr.sort()
    }
    propsArr.map(val => {
        subArrs[val] = []
    })
    arr.map(obj => {
        let thisVal = parseInt(obj[propToCheck])
        let tempArr = subArrs[thisVal] || []
        tempArr.push(obj)
        subArrs[thisVal] = tempArr
    })
    if(order === 1) {
        subArrs.reverse()
    }
    subArrs.map(subArr => {
        returnArray.push(...subArr)
    })
    return returnArray
}