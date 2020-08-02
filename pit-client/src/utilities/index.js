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