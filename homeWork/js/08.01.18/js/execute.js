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
        obj = new Laptop(5,4,"Intel",950,4,4,90,true);
    }
    else{
        obj = new Desktop(5,4,"Asos",950,2,true,16);
    }
    executeActions(obj);
}

//procesorMemeory, diskMemory , processorModel , price, liability, batteryHours, batteryPrec ,touchScreen
//procesorMemeory, diskMemory , processorModel , price, liability, wirless, screenSize