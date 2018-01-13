function executeActions(obj){
    let properties_Array = Object.getOwnPropertyNames(Object.getPrototypeOf(obj)); 
    for(let el in properties_Array){
        let method =  obj[properties_Array[el]];
        if(typeof method == 'function' && properties_Array[el] != 'constructor' ){
            obj[properties_Array[el]]();
        }   
    }
}

for(let i = 0; i<10 ; i++){
    let obj;
    if(i % 2 === 0 ){
        obj = new Laptop(1,2,950,4,true,12);
    }
    else{
        obj = new Computer(1,2,950,4);
    }
    executeActions(obj);
}