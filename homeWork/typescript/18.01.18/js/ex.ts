
export function execOperations(func:(number)=>number = Math.floor ,...params:Array<number> ):Array<number>{
    let res_array:Array<number> = new Array();
    for(let i of params){
        res_array.push(func(i));
    }
    return res_array;
}
