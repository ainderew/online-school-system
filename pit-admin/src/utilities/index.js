export const nameHandler = (name) =>{
    let array = []
    let array2 = []
    
    array =  name.split(" ")
    array = array.filter((el,index) => index === 0 ||index === (array.length - 1) )
    array2.push(array[0])
    array = array[1].split("")
    array2.push(array[0])
    array2 = array2.join(" ")
    
    return array2
}

//FILLS UP ROW STATE WITH OBSERVERS FOR ROW CLICKS
export const initializeScheduleRow = () =>{
    let temp = []
    for (let i = 0; i < 28; i++){
       temp.push({
           state: false
       })
    }
    return temp
}